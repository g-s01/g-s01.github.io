import os

def generate_html(folder_path):
    # List all .jpg files in the given folder
    jpg_files = [f for f in os.listdir(folder_path) if f.lower().endswith(".jpg")]
    
    # Generate the HTML string for each file
    for file_name in jpg_files:
        html_string = f'''
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {{% include figure.liquid loading="eager" path="assets/img/{file_name}" class="img-fluid rounded z-depth-1" zoomable=true %}}
    </div>
</div>
'''
        print(html_string)

# Example usage
folder_path = "assets/img/18-03-2025"  # Change this to your folder path
generate_html(folder_path)