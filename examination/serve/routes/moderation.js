const express = require('express');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs'); 
const Moderation = require('../models/Moderation');

const router = express.Router();

// Endpoint to submit data
router.post('/submit', async (req, res) => {
  const { department,trainer, course, unit, level, answers } = req.body;

  try {
    const moderation = new Moderation({ department,trainer, course, unit, level, answers });
    await moderation.save();
    res.status(200).json({ message: 'Data submitted successfully', id: moderation._id });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

router.get('/download/:id', async (req, res) => {
  try {
    const moderation = await Moderation.findById(req.params.id);

    if (!moderation) {
      console.error('Moderation record not found');
      return res.status(404).json({ error: 'Moderation not found' });
    }

    // Path to the logo image
    const logoPath = path.join(__dirname, '../public/images/logoKinango.jpg');
    if (!fs.existsSync(logoPath)) {
      console.error('Logo image not found at:', logoPath);
      return res.status(500).json({ error: 'Logo image not found' });
    }

    // Create a new PDF document
    const doc = new PDFDocument();
    const filename = `Moderation_${moderation._id}.pdf`;

    res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');
    doc.pipe(res);

   // Add Logo Image at the top center
   try {
    const pageWidth = doc.page.width;
    const logoWidth = 100;
    doc.image(logoPath, (pageWidth - logoWidth) / 2, 50, { width: logoWidth }); // Center logo horizontally
  } catch (err) {
    console.error('Error adding image to PDF:', err);
    doc.fontSize(12).text('Logo could not be loaded', { align: 'center' });
  }

  // Move down to create space below the logo
  doc.moveDown(7);
    // Add Header Text
    doc.fontSize(18).text('KINANGO TECHNICAL AND VOCATIONAL COLLEGE', { align: 'center' });
    doc.moveDown(0);
    doc.fontSize(16).text('OFFICE OF THE REGISTAR', { align: 'center' });
    doc.moveDown(0);
    doc.fontSize(16).text('EXAMINATION DEPARTMENT', { align: 'center' });
    doc.moveDown(0);
    doc.fontSize(16).text('EXAM MODERATION REPORT ', { align: 'center' });
    doc.moveDown();

    // Add Moderation Details
    doc.fontSize(12).text(`Department: ${moderation.department}`);
    doc.text(`Course: ${moderation.course}`);
    doc.text(`Trainer: ${moderation.trainer}`);
    doc.text(`Unit: ${moderation.unit}`);
    doc.text(`Level: ${moderation.level}`);
    doc.text(`Date: ${new Date(moderation.submissionDate).toLocaleDateString()}`);
    doc.moveDown();

    // Add each guideline and response
    moderation.answers.forEach((item, index) => {
      doc.fontSize(12).text(`${index + 1}. ${item.guideline}`);
      doc.text(`Answer: ${item.answer}`);
      doc.text(`Comment: ${item.comment}`);
      doc.moveDown();
    });

     // Add space for stamp and signatures
     doc.moveDown(2);

     // Stamp Placeholder
     doc.fontSize(12)
       .text('Stamp:', 50, doc.y) // left aligned
       .rect(100, doc.y - 12, 100, 50) // Stamp box
       .stroke();
     
     doc.moveDown(3);
 
     // Signature Lines for HOD and Examination Office
     doc.text('Signature of HOD:', 50, doc.y) // Label for HOD signature
       .moveDown(0.5)
       .text('_________________________', 50, doc.y); // Line for HOD signature
     
     doc.moveDown(2);

      // Stamp Placeholder
      doc.fontSize(12)
      .text('Stamp:', 50, doc.y) // left aligned
      .rect(100, doc.y - 12, 100, 50) // Stamp box
      .stroke();

      doc.moveDown(3);
 
     doc.text('Signature of Examination Office:', 50, doc.y) // Label for Examination Office signature
       .moveDown(0.5)
       .text('_________________________', 50, doc.y); // Line for Examination Office signature
 

    // Add Footer to the first page and set up for future pages without triggering new pages
    addFooter(doc);
    doc.on('pageAdded', () => addFooter(doc));

    // Finalize the document
    doc.end();
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

// Helper function to add footer to each page
function addFooter(doc) {
  doc.fontSize(10)
    .text('Kinango Technical College - Moderation Report', 0, doc.page.height - 30, {
      align: 'center',
      width: doc.page.width
    });
}


module.exports = router;
