import streamlit as st
import google.generativeai as genai
from io import BytesIO
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet


genai.configure(api_key="AIzaSyDUL-mHuGs37Mcr6EvYw-z_4OUKV_IRr50")

def generate_claim_document(customer_details, claim_description, agent_notes):
    prompt = f"""
    Generate a detailed and accurate claim resolution document based on the following information:
    - Customer Details: {customer_details}
    - Claim Description: {claim_description}
    - Agent Notes: {agent_notes}
    """
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip()

def save_to_pdf(text):
    pdf_stream = BytesIO()
    doc = SimpleDocTemplate(pdf_stream, pagesize=letter, rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    styles = getSampleStyleSheet()
    style_normal = styles["BodyText"]

    flowables = []
    for line in text.split("\n"):
        # Replace ** with <b> and </b>
        line = line.replace("**", "<b>", 1).replace("**", "</b>", 1)
        flowables.append(Paragraph(line, style_normal))
        flowables.append(Spacer(1, 12))  # Add space between lines

    doc.build(flowables)
    pdf_stream.seek(0)
    return pdf_stream

st.title("AI-Powered Claim Resolution Document Generator")

with st.form("claim_form"):
    st.subheader("Enter Claim Details")
    customer_details = st.text_area("Customer Details (e.g., Name, Policy Number, Contact Info)", "")
    claim_description = st.text_area("Claim Description (e.g., Accident Details, Damage)", "")
    agent_notes = st.text_area("Agent Notes (e.g., Uploaded Documents, Additional Information)", "")
    submitted = st.form_submit_button("Generate Document")

if submitted:
    if not customer_details or not claim_description or not agent_notes:
        st.error("All fields are required!")
    else:
        st.info("Generating document...")

        document_text = generate_claim_document(customer_details, claim_description, agent_notes)
        st.success("Document generated successfully!")
        st.text_area("Generated Document", document_text, height=300)

        pdf_stream = save_to_pdf(document_text)
        st.download_button(
            label="Download PDF",
            data=pdf_stream,
            file_name="claim_document.pdf",
            mime="application/pdf"
        )
