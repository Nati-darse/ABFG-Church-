# 🔧 Donation System Troubleshooting Guide

## 🚨 **Error: POST http://localhost:5000/api/donations/initialize 500 (Internal Server Error)**

This error occurs when the donation initialization fails. Here's how to fix it:

## 🔍 **Step 1: Check Environment Variables**

Create or update your `backend/.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/alembank_church

# Chapa Payment Gateway (REQUIRED)
CHAPA_SECRET_KEY=your-chapa-secret-key-here

# Frontend URL (for callbacks)
FRONTEND_URL=http://localhost:3000

# Email Configuration (optional for now)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@alembankchurch.org
```

## 🔍 **Step 2: Test the System**

Visit this URL to check if everything is working:
```
http://localhost:5000/api/donations/test
```

This will show you:
- ✅ Database connection status
- ✅ Chapa API configuration
- ✅ Environment variables status

## 🔍 **Step 3: Get Chapa API Key**

1. **Sign up at [Chapa.co](https://chapa.co)**
2. **Go to your dashboard**
3. **Copy your Secret Key**
4. **Add it to your .env file**

## 🔍 **Step 4: Common Issues & Solutions**

### **Issue 1: CHAPA_SECRET_KEY not set**
```
Error: CHAPA_SECRET_KEY is not configured
```
**Solution:** Add your Chapa secret key to the `.env` file

### **Issue 2: Database connection failed**
```
Error: Database connection error
```
**Solution:** 
1. Make sure MongoDB is running
2. Check your `MONGODB_URI` in `.env`
3. Run: `mongod` to start MongoDB

### **Issue 3: Chapa API key invalid**
```
Error: Invalid Chapa API key
```
**Solution:**
1. Check your Chapa dashboard for the correct key
2. Make sure you're using the Secret Key, not Public Key
3. Verify the key is active in your Chapa account

### **Issue 4: Network connection issues**
```
Error: Unable to connect to Chapa payment service
```
**Solution:**
1. Check your internet connection
2. Try again in a few minutes
3. Contact Chapa support if the issue persists

## 🔍 **Step 5: Debug Mode**

To see detailed error logs, check your backend console. The improved error handling will show:

```
🔍 Initializing donation: { firstName: 'John', lastName: 'Doe', ... }
✅ Donation record saved to database
🔍 Making Chapa API request to: https://api.chapa.co/v1/transaction/initialize
✅ Chapa API response status: 200
✅ Chapa API response data: { status: 'success', ... }
```

## 🔍 **Step 6: Test the Frontend**

1. **Start your backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start your frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Test the donation form:**
   - Go to http://localhost:3000/donate
   - Fill out the form
   - Submit and check the console for errors

## 🔍 **Step 7: Manual Testing**

You can test the API directly using curl:

```bash
curl -X POST http://localhost:5000/api/donations/initialize \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "1234567890",
    "amount": 100,
    "purpose": "general",
    "isAnonymous": false
  }'
```

## 🔍 **Step 8: Environment Checklist**

Make sure you have:

- ✅ MongoDB running
- ✅ Backend server running on port 5000
- ✅ Frontend server running on port 3000
- ✅ Chapa API key in `.env`
- ✅ All required environment variables set

## 🔍 **Step 9: Production Setup**

For production, you'll need:

1. **Real Chapa API key** (not test key)
2. **Proper domain URLs** in environment variables
3. **SSL certificates** for secure payments
4. **Email service** configured for notifications

## 🆘 **Still Having Issues?**

1. **Check the backend console** for detailed error messages
2. **Visit the test endpoint** to see system status
3. **Verify your Chapa account** is active
4. **Contact support** if the issue persists

## 📞 **Support**

If you're still having issues:
1. Check the backend console logs
2. Test the `/api/donations/test` endpoint
3. Verify all environment variables are set
4. Make sure MongoDB is running
5. Confirm your Chapa API key is valid 