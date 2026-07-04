from fastapi import APIRouter

router = APIRouter(
    prefix="/api",
    tags=["Health"]
)

@router.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "ResumeIQ AI Backend",
        "version": "1.0.0"
    }