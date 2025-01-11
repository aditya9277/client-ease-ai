import os 
from transformers import pipeline
from text_classification import get_sentiment_label
from utills import format_sentiment
import streamlit as st
import os
import google.generativeai as genai
from utills import save_to_csv
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Check if the API key is loaded
google_api_key = os.getenv("GOOGLE_API_KEY")
if not google_api_key:
    raise ValueError("GOOGLE_API_KEY not found. Ensure it's correctly set in your .env file.")

print(f"API Key Loaded: {google_api_key}")  # For debugging only, remove later

try:
    genai.configure(api_key=os.environ.get('GOOGLE_API_KEY'))
except:
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY")) 

## function to load Gemini Pro model and get repsonses
model=genai.GenerativeModel("gemini-pro") 
chat = model.start_chat(history=[])
def get_gemini_response(question):
    
    response=chat.send_message(question)
    return response

##initialize our streamlit app

st.set_page_config(page_title="Q&A Chatbot")

st.header("Customer Sentiment Analyzer")

# Initialize session state for chat history if it doesn't exist
if 'chat_history' not in st.session_state:
    st.session_state['chat_history'] = []

input=st.text_input("Input: ",key="input")
submit=st.button("Check the sentiment")

if submit and input:
    response=get_gemini_response(f'{input} give me an responce within one line')

    # Add user query and response to session state chat history
    st.session_state['chat_history'].append(("You", input))
    st.subheader("The Response is")
    sentiment=get_sentiment_label(response.text)
    for_sentiment=format_sentiment(sentiment)
    st.write(f"{response.text} {for_sentiment}",unsafe_allow_html=True)
    st.session_state['chat_history'].append(("Bot", f'{response.text} {for_sentiment}'))
    save_to_csv(input,response.text,sentiment)


st.subheader("The Chat History is")

for role, text in st.session_state['chat_history']:
    st.write(f"{role}: {text}",unsafe_allow_html=True)
