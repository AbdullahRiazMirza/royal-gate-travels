# Email Setup for Contact Form

The contact form has been simplified to include only essential fields:
- Name (required)
- Email (required)
- Phone (required)
- Message (required)

## Email Configuration

The form supports two methods for sending emails:

### Method 1: Email Service Endpoint (Recommended)

Set the `VITE_EMAIL_ENDPOINT` environment variable to your email service endpoint:

```bash
# In your .env file
VITE_EMAIL_ENDPOINT=https://your-email-service.com/send-email
```

The form will send a POST request to this endpoint with the following JSON payload:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "I'm interested in your travel services..."
}
```

### Method 2: Fallback to Email Client

If no endpoint is configured, the form will open the user's default email client with pre-filled content.

## Contact Information Display

The contact section now displays:
- **Phone**: +92 321 489 9987
- **Email**: info@royalgatetravels.com
- **Office Address**: 123 Travel Street, London, UK
- **WhatsApp**: +92 321 489 9987

## Email Service Integration Examples

### Using EmailJS
```javascript
// Example endpoint handler
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // Send email using EmailJS or similar service
  // Implementation depends on your chosen email service
});
```

### Using Nodemailer
```javascript
// Example endpoint handler
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // Send email using Nodemailer
  // Implementation depends on your SMTP configuration
});
```

## Testing

To test the form without an email service:
1. Leave `VITE_EMAIL_ENDPOINT` empty or undefined
2. Submit the form - it will open your default email client
3. The email will be pre-filled with the form data
