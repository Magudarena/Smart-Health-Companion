# Smart Health Companion

### Project Description
MediMind AI is an advanced health management ecosystem designed to bridge the gap between clinical consultations and daily home care. Leveraging Artificial Intelligence (LLM) and OCR technology concepts, the application acts as a personal medical assistant that helps patients—especially seniors and those with chronic conditions—adhere to complex treatment plans.

Unlike standard pill-reminders, MediMind AI is designed to understand medical context, monitor vital signs, and provide a direct, data-driven link between the patient and their healthcare provider.

**Note: Current Project Status**
This repository currently contains the **Frontend and UI/UX Project only**. It serves as a functional prototype and interface demonstration. It does not include a live backend, database integration, or active AI processing at this stage.

---

### Key Features

#### AI Health Assistant (NLP Concept)
* Voice and Text Interaction: Designed to handle natural language queries regarding medication timing and side effects.
* Medical Jargon Translator: Converts complex doctor's notes into simple, actionable steps for the patient.
* Safety Layer: Built-in conceptual guardrails to prevent self-diagnosis while encouraging professional consultation.

#### Smart Medication Management
* OCR Scanning Interface: A dedicated UI for snapping photos of prescriptions or medication boxes to populate the schedule.
* Intelligent Adherence: Adaptive reminders that adjust based on the patient's daily routine.
* Senior Mode: A specialized high-contrast, large-button interface designed for accessibility.

#### Health Monitoring and Remote Care
* Vital Signs Tracking: Interface for manual and wearable integration (blood pressure, glucose, and heart rate).
* Doctor’s Dashboard: A web-based portal concept for medical professionals to view trends and adherence rates.
* Guardian Alerts: Automatic escalation system to notify family members if critical medications are missed.

---

### System Requirements

#### Functional Requirements (FR)
* FR1: The system shall provide an interface to extract medication data via OCR.
* FR2: The system shall support voice-controlled interaction simulations.
* FR3: The system shall generate visual health reports for medical review.
* FR4: The system shall manage local push notifications for scheduled doses.

#### Non-Functional Requirements (NFR)
* Security: Designed for end-to-end encryption (GDPR/MDR compliance standards).
* Usability: UI complies with WCAG 2.1 accessibility standards for elderly users.
* Performance: Interface optimized for high responsiveness and low latency.
* Reliability: Offline access to the local medication schedule and emergency contact info.

---

### UI/UX Concept
The interface focuses on "Empathetic Design":
* Color Palette: Trust-inducing medical blues, soft whites, and clear status indicators.
* Navigation: Simplified 4-tab bar (Home, Assistant, Schedule, Vitals).
* Interaction: Focus on large touch targets and haptic feedback for users with limited dexterity.

---

### Future Roadmap
* Backend Integration: Implementation of Node.js/Python FastAPI and PostgreSQL.
* Live AI Engine: Integration with OpenAI GPT-4 or Anthropic Claude API via secure proxy.
* Pharmacy Integration: Automatic prescription refills and direct pharmacy links.

---

### Running the code

1. Run `npm i` to install the dependencies.
2. Run `npm run dev` to start the development server.

---

### Authors
* Magdalena Zawada
* Kinga Skrzypczak (Wojtanowicz) 
