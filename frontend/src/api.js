// src/api.js
// const API_BASE = "http://127.0.0.1:8011/api/v1"; // FastAPI backend
// Named export
// export const API_BASE = "http://127.0.0.1:8011/api/v1";




// // src/api.js
// export async function getEmissions() {
//   const res = await fetch(`${API_BASE}/emissions`);
//   return res.json();
// }



// export async function getMessages() {
//   try {
//     const response = await fetch(`${API_BASE}/messages`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     return [];
//   }
// }

// src/api.js
export const API_BASE = "http://127.0.0.1:8017/api/v1";

// Dashboard endpoints
// export async function getDashboard() {
//   try {
//     const res = await fetch(`${API_BASE}/dashboard`);
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching dashboard:", error);
//     throw error;
//   }
// }
// In your api.js file, make sure getDashboard has proper error handling
export async function getDashboard() {
  try {
    console.log("Fetching from:", `${API_BASE}/dashboard`);
    const res = await fetch(`${API_BASE}/dashboard`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log("API Response received:", data);
    return data;
  } catch (error) {
    console.error("Error in getDashboard:", error);
    throw error;
  }
}

// Emissions endpoints
export async function getEmissions() {
  try {
    const res = await fetch(`${API_BASE}/emissions`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching emissions:", error);
    throw error;
  }
}

export async function addEmission(emissionData) {
  try {
    const res = await fetch(`${API_BASE}/emissions/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emissionData),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error adding emission:", error);
    throw error;
  }
}

// Messages endpoints - CORRECTED PATH
export async function getMessages() {
  try {
    const response = await fetch(`${API_BASE}/messages/send/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

export async function sendMessage(messageData) {
  try {
    const response = await fetch(`${API_BASE}/messages/send/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}

// Home endpoint
export async function getHomeSummary() {
  try {
    const res = await fetch(`${API_BASE}/home`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching home summary:", error);
    throw error;
  }
}

// Reports endpoint
export async function getReports() {
  try {
    const res = await fetch(`${API_BASE}/reports`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
}

export async function getEmissionsTrend() {
  try {
    const res = await fetch(`${API_BASE}/emissions/trend`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.trend;
  } catch (error) {
    console.error("Error fetching emissions trend:", error);
    return [];
  }
}

