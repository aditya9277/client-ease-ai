
# 📊 Client Ease AI - AI-Driven Workflow and Efficiency Enhancement for Indian BPOs 🇮🇳

## 🌟 Project Overview

**Client Ease AI** is a comprehensive AI-powered solution designed to revolutionize claims processing and customer service operations in Indian BPOs. By leveraging the power of **Generative AI (Gemini API)**, **Twilio**, and **Google Cloud Speech-to-Text**, this platform streamlines workflows, enhances agent efficiency, and significantly improves client experiences.

Built to handle complex tasks, automate routine processes, and provide real-time insights, **Client Ease AI** ensures higher productivity and reduced operational costs while maintaining a human-centric approach.

---

## 🚀 Key Features

### 🔮 AI-Powered Sentiment Analysis Tool
- Real-time sentiment tracking during calls using Google Cloud Speech-to-Text and Gemini AI.
- Detects customer emotions (Positive, Neutral, Frustrated, Disappointed) and reflects live sentiment on the dashboard.

### 📅 Smart Reminders and Follow-Up Scheduler
- AI analyzes call transcripts to schedule automatic follow-ups and callbacks.
- Prioritizes claims based on urgency and customer sentiment.

### 📚 AI Knowledge Base Assistant
- Integrated Gemini AI searches knowledge base dynamically based on call context.
- Instant recommendations and FAQs directly to the agent.

### 📑 Generative AI for Automated Claim Resolution Documentation
- Post-call, Gemini AI generates a professional claim document based on the transcript and agent notes.
- Reduces manual documentation time and ensures consistency.

### 📊 Unified Dashboard and Integration Layer
- Centralized dashboard for agents and managers.
- Real-time data visualizations, KPIs, and sentiment insights.
- **Manager View** for team monitoring and agent performance tracking.

### 🧠 AI-Powered Smart Summarization of Call Logs
- Generates concise summaries for every completed call.
- Stores summaries for historical reference and manager insights.

### 🎯 Real-Time AI Sentiment & Call Quality Monitoring
- Real-time call quality scoring based on customer interactions.
- Alerts for high-risk calls and immediate manager intervention.

### 📆 Smart AI-Powered Callback Scheduler (Priority-Based)
- Intelligent scheduling system for callbacks and follow-ups.
- Ensures no high-priority customer is left unattended.

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
- **Sentiment Analysis**: Google Cloud Speech-to-Text + Gemini AI
- **Generative AI**: Gemini API for document creation and insights
- **Natural Language Processing (NLP)**: Real-time transcription and knowledge extraction

### 🏗️ Infrastructure
- **Hosting**: Azure App Service (Backend & Frontend)
- **Cloud Storage**: Azure Storage for transcripts, summaries, and generated documents
- **Version Control**: GitHub

---

## 📁 Folder Structure

```
Client_Ease_AI/
│   README.md                         # Main project documentation
│
├── backend/                          # Backend code and services
│   ├── .env                          # Environment variables
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Main Express backend server
│   ├── sentimentAnalyzer.js          # Sentiment analysis module
│   ├── generateClaimDocument.js      # Claim document generation using Gemini API
│   ├── knowledgeBase.js              # Knowledge base integration
│   └── callbacksHandler.js           # Callback scheduler logic
│
├── public/                           # Static assets (images, icons, etc.)
│   ├── favicon.ico
│   ├── og-image.png
│   └── placeholder.svg
│
├── src/                              # Frontend React code
│   ├── App.tsx                       # Main React App
│   ├── App.css                       # Global styles
│   ├── index.css                     # TailwindCSS configurations
│   ├── main.tsx                      # Entry point for React
│   ├── vite-env.d.ts                  # Vite environment types
│
│   ├── components/                   # Reusable UI and dashboard components
│   │   ├── DashboardLayout.tsx       # Main layout
│   │   ├── DashboardSidebar.tsx      # Sidebar for navigation
│   │   ├── TopNav.tsx                # Top navigation bar
│   │   ├── dashboard/                # Agent and Manager dashboards
│   │   │   ├── AgentDashboard.tsx    # Agent's main dashboard
│   │   │   ├── ManagerDashboard.tsx  # Manager's main dashboard
│   │   │   ├── LastCallReport.tsx    # Last call report component
│   │   │   └── StatsCard.tsx         # Stats card
│   │   ├── cards/                    # Card Components
│   │   │   ├── ActionRecommendationsCard.tsx
│   │   │   ├── AutomationCard.tsx
│   │   │   ├── CallbackSchedulerCard.tsx
│   │   │   ├── CallHistoryCard.tsx
│   │   │   ├── CallTranscriptCard.tsx
│   │   │   ├── ClaimsCard.tsx
│   │   │   ├── CustomerFormCard.tsx
│   │   │   ├── CustomerInsightsCard.tsx
│   │   │   ├── KnowledgeBaseCard.tsx
│   │   │   ├── LiveCallCard.tsx
│   │   │   ├── PerformanceMetricsCard.tsx
│   │   │   ├── PreCallCard.tsx
│   │   │   ├── QuickResponseCard.tsx
│   │   │   ├── ReportCard.tsx
│   │   │   ├── SentimentAnalysisCard.tsx
│   │   │   └── SmartRemindersCard.tsx
│   │   ├── manager/                  # Manager-specific components
│   │   │   ├── AIInsights.tsx
│   │   │   ├── AnalyticsCharts.tsx
│   │   │   ├── RecentClaims.tsx
│   │   │   ├── StatsOverview.tsx
│   │   │   └── TeamCommunication.tsx
│   │   └── ui/                       # UI Library Components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── table.tsx
│   │       └── toast.tsx
│
│   ├── hooks/                        # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│
│   ├── lib/                          # Utility functions
│   │   └── utils.ts
│
│   ├── integrations/                 # External integrations
│   │   └── supabase/                 # Example: Supabase config
│   │       ├── client.ts
│   │       └── types.ts
│
│   └── pages/                        # React pages
│       ├── Dashboard.tsx
│       ├── Index.tsx
│       └── test.tsx
│
├── supabase/                         # Supabase config
│   └── config.toml
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
    git clone https://github.com/your-repo-name/ClientEaseAI.git
    cd ClientEaseAI
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

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. **Install Frontend Dependencies**
    ```bash
    npm install
    ```

3. **Run Frontend**
    ```bash
    npm run dev
    ```

4. Access the app at `http://localhost:3000`.

---

## 🧪 Usage Guide

### 📞 Start a Call
1. Enter a verified phone number.
2. Real-time transcription, sentiment analysis, and AI suggestions appear on the agent dashboard.

### 📋 Post-Call Workflow
1. Automatic claim document generated after call ends.
2. AI-powered call summary and sentiment report.
3. View call history and download call reports from the dashboard.

### 📊 Manager Dashboard
- Monitor agent performance.
- Access KPIs, call quality metrics, and team stats.

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

- **Email**: support@clienteaseai.com
- **GitHub**: [Your GitHub Profile](https://github.com/your-profile)

---

🚀 _Empowering Indian BPOs with AI. One call at a time._ 🇮🇳
