# 📊 Kisan Mitraa - AI-Driven Farming Support for Indian Farmers 🇮🇳

## 🌟 Project Overview

**Kisan Mitraa** is a comprehensive AI-powered solution designed to revolutionize agricultural support for Indian farmers. By leveraging the power of **Generative AI (Gemini API)**, **Twilio**, and **Google Cloud Speech-to-Text**, this platform streamlines consultations, enhances agricultural knowledge sharing, and significantly improves farmer experiences.

Built to handle complex farming issues, automate routine processes, and provide real-time insights, **Kisan Mitraa** ensures higher productivity and reduced knowledge gaps while maintaining a human-centric approach.

---

## 🚀 Key Features

### 🔮 AI-Powered Consultation Scheduler
- Smart priority-based scheduling that automatically manages follow-ups based on crop urgency and farmer needs.
- Ensures urgent crop issues are addressed first.
- Reduces wait time and missed follow-ups.

### 📅 Farming Knowledge Assistant
- Dynamic knowledge base that provides instant, relevant agricultural solutions from past cases.
- Searchable AI-powered farming FAQ bot.
- Learns from previous agricultural cases.
- Reduces crop issue resolution time.

### 📚 Crop Health Analysis
- Continuous tracking of crop conditions through visual and descriptive analysis.
- Detects crop health issues in real-time.
- Provides instant expert feedback.
- Tracks seasonal performance dynamically.

### 📑 Consultation Summarization
- AI-powered automatic generation of consultation summaries with actionable insights.
- Generates professional advice summaries.
- Stores for future reference.
- Makes post-consultation processes instant.

### 📊 Automated Documentation
- AI-generated crop management documents from consultation transcripts and notes.
- Auto-formats structured farming details.
- Ensures accuracy in recommendations.
- Reduces paperwork for farmers.

### 🧠 Seasonal Reminder System
- AI-powered follow-up system ensuring no crop issue is overlooked across seasons.
- Smart seasonal reminder scheduling.
- Organized crop management workflow.
- Efficient harvest tracking.

---

## 🛠️ Tech Stack

### 💻 Frontend
- **Framework**: React.js (Vite)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **State Management**: React Context API

### ⚙️ Backend
- **Framework**: Node.js with Express.js
- **Real-Time Communication**: WebSocket
- **APIs**: REST-based architecture
- **AI Integration**: Gemini API, Google Cloud Speech-to-Text, Twilio

### 🧠 AI/ML
- **Sentiment Analysis**: Google Cloud Speech-to-Text + Gemini API
- **Generative AI**: Gemini API for document creation and insights
- **Natural Language Processing (NLP)**: Real-time transcription and knowledge extraction

### 🏗️ Infrastructure
- **Hosting**: Azure App Service (Backend & Frontend)
- **Cloud Storage**: Azure Storage for transcripts, summaries, and generated documents
- **Version Control**: GitHub

---

## 📁 Folder Structure

```
Kisan_Mitraa/
│
├── backend/                          # Backend code and services
│   ├── .env                          # Environment variables
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Main Express backend server
│   ├── sentimentAnalyzer.js          # Sentiment analysis module
│   ├── generateConsultationSummary.js# Consultation summary generation using Gemini API
│   ├── knowledgeBase.js              # Knowledge base integration
│   └── remindersHandler.js           # Reminder scheduler logic
│
├── public/                           # Static assets (images, icons, etc.)
│   ├── favicon.ico
│   ├── og-image.png
│   └── placeholder.svg
│
├── src/                              # Frontend React code
│   ├── App.tsx                       # Main React App
│   ├── main.tsx                      # Entry point for React
│
│   ├── components/                   # Reusable UI components
│   │   ├── Hero.tsx                  # Hero Section Component
│   │   ├── Features.tsx              # Features Section Component
│   │   ├── Stats.tsx                 # Stats Section Component
│   │   └── Footer.tsx                # Footer Component
│   ├── hooks/                        # Custom hooks
│   ├── lib/                          # Utility functions
│   └── pages/                        # React pages
├── supabase/                         # Supabase config
│
├── .devcontainer/                    # Dev environment setup
├── package.json                      # Frontend dependencies
├── tailwind.config.ts                # TailwindCSS configuration
├── vite.config.ts                    # Vite.js configuration
└── README.md                         # Project documentation

```

---

## 💻 Installation & Setup

### 📋 Prerequisites
- **Node.js**: v16 or higher
- **npm**: v6 or higher
- **Python**: v3.8 or higher (for RPA/Automation Scripts)
- **Google Cloud API Key**
- **Twilio Account SID & Auth Token**
- **Gemini API Key**

### 🔧 Backend Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/aditya9277/kisan-mitraa.git
    cd backend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**
   Create a `.env` file and add:
    ```
    TWILIO_ACCOUNT_SID=your_twilio_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth
    TWILIO_PHONE_NUMBER=your_twilio_number
    GOOGLE_APPLICATION_CREDENTIALS=path_to_google_creds.json
    GEMINI_API_KEY=your_gemini_api_key
    ```

4. **Run Backend**
    ```bash
    npm run dev
    ```

### 🌐 Frontend Setup

1. Navigate to the root directory
  

2. **Install Frontend Dependencies**
    ```bash
    npm install
    ```

3. **Run Frontend**
    ```bash
    npm run dev
    ```

4. Access the app at `http://localhost:8080`.

---

## 🧪 Usage Guide

### 🌾 Start a Consultation
1. Provide details of the crop issue.
2. Real-time AI suggestions and knowledge base appear on the consultation dashboard.

### 📝 Post-Consultation Workflow
1. Automatic consultation summary generated after the session.
2. AI-powered insights and seasonal reminders.
3. View consultation history and download reports from the dashboard.

### 🧑‍🌾 Farmer Dashboard
- Access personalized advice.
- View crop health analysis and seasonal performance.

---

## 🤝 Contribution

We welcome community contributions! 🚀

1. **Fork the repository**
2. **Create a new branch**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Commit your changes**
    ```bash
    git commit -m "Add: your feature"
    ```
4. **Push to the branch**
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Open a Pull Request**

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📬 Contact

For queries, collaborations, or testing access, feel free to reach out:

- **Email**: support@kisanmitraa.com
- **GitHub**: [Your GitHub Profile](https://github.com/your-profile)

---

🚀 _Empowering Indian Farmers with AI. One consultation at a time._ 🇮🇳
