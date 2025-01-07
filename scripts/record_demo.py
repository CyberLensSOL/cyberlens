import subprocess
import time
import os
from datetime import datetime

def record_demo(duration=30):
    """
    Record screen demonstration using FFmpeg
    duration: recording length in seconds
    """
    output_dir = "public/assets"
    os.makedirs(output_dir, exist_ok=True)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = f"{output_dir}/demo.mp4"
    
    # FFmpeg command for screen recording
    command = [
        "ffmpeg",
        "-f", "x11grab",  # X11 display grabbing
        "-s", "1280x720", # Resolution
        "-r", "30",       # Framerate
        "-i", ":0.0",     # Display to capture
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-t", str(duration),
        output_file
    ]
    
    print(f"Starting screen recording for {duration} seconds...")
    try:
        subprocess.run(command, check=True)
        print(f"Recording completed successfully!")
        print(f"Video saved to: {output_file}")
        
        # Create a thumbnail
        thumbnail_file = f"{output_dir}/video-thumbnail.png"
        thumbnail_command = [
            "ffmpeg",
            "-i", output_file,
            "-vframes", "1",
            "-s", "1280x720",
            thumbnail_file
        ]
        subprocess.run(thumbnail_command, check=True)
        print(f"Thumbnail created: {thumbnail_file}")
        
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error during recording: {e}")
        return False

if __name__ == "__main__":
    record_demo()
