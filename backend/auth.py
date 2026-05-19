import os
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

from dotenv import load_dotenv
from fastapi import APIRouter, Request
from fastapi.responses import RedirectResponse

from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

load_dotenv()

router = APIRouter()

CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
REDIRECT_URI = os.getenv("REDIRECT_URI")

SCOPES = [
    "https://www.googleapis.com/auth/gmail.readonly"
]

flow = Flow.from_client_config(
    {
        "web": {
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
        }
    },
    scopes=SCOPES,
    redirect_uri=REDIRECT_URI,
)

@router.get("/login")
def login():

    authorization_url, state = flow.authorization_url(
        access_type="offline",
        prompt="consent"
    )

    return RedirectResponse(authorization_url)


@router.get("/callback")
def callback(request: Request):

    flow.fetch_token(
        authorization_response=str(request.url)
    )

    credentials = flow.credentials

    service = build("gmail", "v1", credentials=credentials)

    results = service.users().messages().list(
        userId="me",
        maxResults=10
    ).execute()

    messages = results.get("messages", [])

    email_data = []

    for message in messages:

        msg = service.users().messages().get(
            userId="me",
            id=message["id"]
        ).execute()

        headers = msg["payload"]["headers"]

        subject = ""
        sender = ""

        for header in headers:

            if header["name"] == "Subject":
                subject = header["value"]

            if header["name"] == "From":
                sender = header["value"]

        # Categorization Logic
        category = "General"

        if "indeed" in sender.lower():
            category = "Job Alerts"

        elif "naukri" in sender.lower():
            category = "Job Alerts"

        elif "sale" in subject.lower():
            category = "Promotions"

        elif "unsubscribe" in msg.get("snippet", "").lower():
            category = "Newsletter"

        email_data.append({
            "subject": subject,
            "from": sender,
            "snippet": msg.get("snippet"),
            "category": category
        })

    return {
        "emails": email_data
    }