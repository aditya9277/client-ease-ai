import streamlit as st
import json
import pyautogui
import time
from pyvirtualdisplay import Display

display = Display(visible=0, size=(1024, 768))
display.start()

def read_json(file):
    data = json.load(file)
    return data

def automate_form_filling(data):
    """
    Automate form filling using pyautogui.
    :param data: Dictionary containing field names and values.
    """
    st.info("Switch to the live form and ensure the first field is selected.")
    time.sleep(5) 

    for field, value in data.items():
        st.write(f"Filling field '{field}' with value: '{value}'")
        pyautogui.typewrite(value)  
        pyautogui.press('tab')  
        time.sleep(0.5) 

    st.success("Form filling complete!")

st.title("BPM/BPO Automation - Autofill Customer Data")
st.subheader("Automate Form Filling During Live Calls")

uploaded_file = st.file_uploader("Upload Customer Data (JSON)", type="json")

if uploaded_file is not None:
    input_data = read_json(uploaded_file)
    st.subheader("Uploaded Data")
    st.json(input_data) 
    if st.button("Autofill Customer Data"):
        st.info("Starting autofill process...")
        automate_form_filling(input_data)

display.stop()
