# 🧠 AI vs Human Images Classifier

A deep learning project to classify whether an image is **AI-generated** (e.g., DALL·E, Midjourney, Stable Diffusion) or **Human-captured** using a camera. Built for Generative AI validation and digital content authenticity.

---

## 🚀 Features

- Classifies images as either **AI-generated** or **Human-taken**
- Built using **Convolutional Neural Networks (CNN)**
- Easily extendable with **Transfer Learning**
- Clean, modular codebase
- Dataset : https://www.kaggle.com/datasets/birdy654/cifake-real-and-ai-generated-synthetic-images

---

## 🗂️ Folder Structure

ai_vs_human_images_classifier/
├── dataset/             # Folder containing image data
│   ├── ai/              # AI-generated images
│   └── human/           # Human-captured images
├── dataset.py           # Handles image loading and preprocessing
├── model.py             # CNN model architecture definition
├── train.py             # Model training script
├── test.py              # Model evaluation/testing script
├── requirements.txt     # Python dependencies
└── README.md            # Project documentation

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai_vs_human_images_classifier.git
cd ai_vs_human_images_classifier

```bash
python train.py

```bash
python test.py

```bash
pip install -r requirements.txt






