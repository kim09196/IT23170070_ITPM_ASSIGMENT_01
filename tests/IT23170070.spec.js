const { test, expect } = require("@playwright/test");
const XLSX = require("xlsx");
const path = require("path");

const workbook = XLSX.readFile(
  path.join(__dirname, "../IT23170070_TestCases.xlsx")
);

const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

const testCases = new Map();

for (const row of rows) {
  if (!row.TC_ID) continue;

  const tcId = String(row.TC_ID).replace(/\s+/g, "").trim();

  if (!testCases.has(tcId)) {
    testCases.set(tcId, {
      TC_ID: tcId,
      Input: row.Input,
      Expected: row["Expected output"],
    });
  }
}

test.describe("SwiftTranslator - Functional Tests", () => {
  for (const tc of testCases.values()) {
    test(tc.TC_ID, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "domcontentloaded",
      });

      const inputBox = page.getByRole("textbox", {
        name: "Input Your Singlish Text Here.",
      });

      await inputBox.fill(tc.Input);

      
      await expect
        .poll(
          async () =>
            await page
              .getByText(tc.Expected, { exact: false })
              .count(),
          { timeout: 18000 }
        )
        .toBeGreaterThan(0);
    });
  }
});
