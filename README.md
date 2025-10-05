# Weight Converter

A minimal client-side Pounds → Kilograms converter built with HTML, CSS and JavaScript.

This small project converts a user-entered weight in pounds to kilograms and displays the result on the page.

## Files

- `index.html` — Page markup and input elements.
- `style.css` — Styles for centering the container and responsive layout.
- `script.js` — Event handler and conversion logic. The parsed variable is named `pounds`.

## How to use

1. Open `index.html` in your browser. The simplest ways:

```bash
# on macOS: open the file in the default browser
open index.html

# or run a quick HTTP server (useful if you have CORS or other assets later)
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
open http://localhost:8000
```

2. Type a numeric value (e.g. `150`) into the input field. The page will update the displayed kilograms automatically.
3. Clear the input to reset the displayed output to the base prompt. Type non-numeric text to see the error message.

## Important notes

- Do NOT run `script.js` using Node (`node script.js`); the script expects to run in a browser and accesses the DOM (`document.querySelector`) which Node does not provide. The `Exit Code: 127` you saw earlier is a symptom of trying to run browser code in the terminal.

- The script handler uses early `return` statements to stop execution when the input is empty or invalid so previous results aren't shown.

## Behavior and validation

- Empty input: output area returns to the base prompt (`Your weight in kg is:`).
- Invalid input (non-numeric): an error message appears and any previous conversion is hidden.
- Valid input: the number is parsed as `pounds`, converted to kilograms using 1 kg = 2.205 lb, and displayed with two decimals.

## Possible improvements

- Add a unit toggle to convert in both directions (kg ↔ lb).
- Add a "Clear" button to reset both input and output explicitly.
- Add keyboard accessibility and enhanced styling.
- Add unit tests for the conversion function if you extract it to a standalone module.

## Contributing

Small fixes and improvements are welcome — open a PR or edit the files locally.

## License

This project is provided "as-is" for learning purposes. Use or adapt freely.
