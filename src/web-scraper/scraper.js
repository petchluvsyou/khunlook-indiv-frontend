const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// List of URLs to scrape
const urls = [
    'https://www.khunlook.com/index.php?option=com_content&view=article&id=77&Itemid=150',
    'https://www.khunlook.com/index.php?option=com_content&view=article&id=79&Itemid=152',
    'https://www.khunlook.com/index.php?option=com_content&view=article&id=80&Itemid=153',
    'https://www.khunlook.com/index.php?option=com_content&view=article&id=78&Itemid=154'
];

// Function to scrape a single page and extract data
const scrapePage = async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        // Extract the 'item-page' div content
        const itemPageContent = $('.item-page');  // Extract the 'item-page' div
        const h1Element = $('h1.item-page-title');  // Look for an h1 with a specific class (insight-item-page)

        if (itemPageContent.length && h1Element.length) {
            const pid = h1Element.text().trim();  // Set pid to the text content of h1 (e.g., 'insight-item-page')
            console.log(`Scraped content from: ${url}`);
            return {
                pid,  // Add the pid field
                url,
                content: itemPageContent.html() || 'No content found'
            };
        } else {
            console.log(`No 'item-page' div or 'insight-item-page' h1 found on: ${url}`);
            return null;
        }
    } catch (error) {
        console.error(`Error scraping ${url}:`, error.message);
        return null;
    }
};

// Function to scrape all pages and update the existing data file
const scrapeAllPages = async () => {
    const scrapedData = [];

    for (const url of urls) {
        const pageData = await scrapePage(url);
        if (pageData) {
            scrapedData.push(pageData);
        }
    }

    // Define the path to the existing scraped data file
    const existingDataPath = path.join(__dirname, '..', 'public', 'data', 'scrapedData.json');

    // Check if the existing data file exists
    let existingData = [];
    if (fs.existsSync(existingDataPath)) {
        existingData = JSON.parse(fs.readFileSync(existingDataPath, 'utf8'));
    }

    // Append new scraped data to the existing data
    existingData = [...existingData, ...scrapedData];

    // Ensure the directory exists (if not, create it)
    fs.mkdirSync(path.dirname(existingDataPath), { recursive: true });

    // Write the updated data back to the file
    fs.writeFileSync(existingDataPath, JSON.stringify(existingData, null, 2));
    console.log(`Scraped data appended to ${existingDataPath}`);
};

// Start scraping
scrapeAllPages();
