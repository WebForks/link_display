# Link Display

A customizable link display page that allows you to showcase your links in a clean, modern grid layout.

## Features

- Customizable colors (main color, secondary color, text color)
- Configurable number of columns
- Custom header text
- Responsive design
- Hover effects on link boxes
- Easy configuration through JSON
- Lightweight Node.js server for easy deployment behind reverse proxies

## How to Use

### Option 1: Direct Usage

1. Clone this repository
2. Open `config.json` and modify the following settings:
   - `mainColor`: Primary color for link boxes (hex color code)
   - `secondaryColor`: Secondary color for alternating link boxes (hex color code)
   - `textColor`: Color for text (hex color code)
   - `headerText`: The title displayed at the top of the page
   - `columns`: Number of columns in the grid
   - `linkboxes`: Array of link box objects, each containing:
     - `title`: The title of the link box
     - `link`: The URL the link box should point to
     - `description`: A brief description of the link
3. Open `index.html` in a web browser to view your link display page

### Option 2: Docker Deployment

1. Clone this repository
2. Modify the `config.json` file as described above
3. Build and run using Docker Compose:
   ```bash
   docker-compose up -d
   ```
4. Access the application at `http://localhost:3000`

To stop the application:

```bash
docker-compose down
```

## Example Configuration

- See example-config.json
