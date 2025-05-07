import cv2
import os

def resize_image(image_path, output_path, target_size=(224, 224)):
    """Resize an image to 224x224 and save it."""
    img = cv2.imread(image_path)  # Read the image
    if img is None:
        print(f"Error: Could not read {image_path}")
        return
    
    resized_img = cv2.resize(img, target_size)  # Resize to 224x224
    cv2.imwrite(output_path, resized_img)  # Save the resized image
    print(f"Resized {image_path} -> {output_path}")

# Example: Process one image
resize_image("Tomato_Early_blight.jpg", "Tomato_Early_blight_resized.jpg")