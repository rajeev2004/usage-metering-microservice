# Usage Metering Microservice  
A lightweight **Node.js + Express** microservice that records usage events, aggregates customer usage, and calculates billable amounts.  
This project mimics core concepts behind **usage-based billing infrastructure**, similar to systems built at **Zenskar**.

---

## 🚀 Features

### 🔹 1. Record Usage Events  
`POST /usage/record`  
- Accepts: `customer_id`, `event_type`, `units`  
- Calculates cost using pricing rules  
- Stores the entry in an in-memory usage database  

### 🔹 2. Usage Summary  
`GET /usage/summary/:customer_id`  
- Aggregates all usage for a customer  
- Breaks down usage per event type  
- Computes total units + total cost  

### 🔹 3. Simple Pricing Model  
Configured in `pricingConfig.js`:
```js
api_call: 0.5,
storage_gb: 2.0,
sms_sent: 0.2
```
##🧪 API Endpoints
✔ POST /usage/record
### Test 1:
### Test LIVE API ✔ POST https://kyc-miniservice.onrender.com/kyc/pan/verify

Record a usage event.

Request Body
```json
{
  "customer_id": "cust_001",
  "event_type": "api_call",
  "units": 25
}
```

Response
```json
{
  "message": "Usage recorded successfully",
  "entry": {
    "customer_id": "cust_001",
    "event_type": "api_call",
    "units": 25,
    "cost": 12.5
  }
}
```

✔ GET /usage/summary/:customer_id
### Test 2:
### Test LIVE API ✔ POST https://kyc-miniservice.onrender.com/kyc/pan/verify

Retrieve aggregated usage and bill.

Example
GET /usage/summary/cust_001
Response
```json
{
  "customer_id": "cust_001",
  "total_units": 450,
  "event_breakdown": {
    "api_call": 350,
    "storage_gb": 100
  },
  "total_cost": 225
}
```