import subprocess
import sys

def install_supabase():
    print("Installing Supabase CLI via npm...")
    try:
        # Installing locally as dev dependency
        subprocess.run(["npm", "install", "supabase", "--save-dev"], check=True, capture_output=True, text=True, shell=True)
        print("Supabase CLI installed locally as a dev dependency.")
    except subprocess.CalledProcessError as e:
        print(f"Error installing Supabase CLI: {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("npm not found. Please ensure Node.js is installed.")
        sys.exit(1)

if __name__ == "__main__":
    install_supabase()
