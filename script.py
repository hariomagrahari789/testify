import re

def remove_angle_brackets_and_empty_lines(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove everything between < and > (non-greedy match)
    cleaned_content = re.sub(r'<.*?>', '', content)

    # Split into lines, remove empty or whitespace-only lines
    lines = cleaned_content.splitlines()
    non_empty_lines = [line.strip() for line in lines if line.strip()]

    # Join back into a string
    final_content = '\n'.join(non_empty_lines)

    # Save to output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(final_content)

    print(f"Cleaned content saved to {output_file}")

# Example usage
remove_angle_brackets_and_empty_lines(r'public\bitsat-exam.html', 'cleaned_output.txt')