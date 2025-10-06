// // import React, { useState } from 'react';

// // // --- Reusable Styles (Consistent with the holographic/futuristic theme) ---
// // const styles = {
// //     pageContainer: {
// //         background: 'rgba(0, 5, 10, 0.98)', // Very dark, almost opaque background
// //         minHeight: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         fontFamily: 'Roboto, sans-serif',
// //         color: 'var(--text-color, #ffffff)',
// //     },
// //     loginCard: {
// //         background: 'rgba(5, 15, 25, 0.95)', // Darker, slightly transparent card background
// //         border: '1px solid var(--main-color, #00ffc8)', // Neon border
// //         boxShadow: '0 0 25px rgba(0, 255, 200, 0.6)', // Prominent outer glow
// //         borderRadius: '16px',
// //         padding: '40px',
// //         maxWidth: '450px',
// //         width: '90%', // Make it responsive
// //         textAlign: 'center',
// //     },
// //     h1: {
// //         color: 'var(--main-color, #00ffc8)',
// //         fontSize: '2.2em',
// //         marginBottom: '10px',
// //         textShadow: '0 0 8px rgba(0, 255, 200, 0.7)',
// //     },
// //     tagline: {
// //         color: 'var(--text-faded, #a0a0a0)',
// //         fontSize: '1.0em',
// //         marginBottom: '30px',
// //     },
// //     label: {
// //         display: 'block',
// //         color: 'var(--text-faded, #a0a0a0)',
// //         marginBottom: '8px',
// //         textAlign: 'left',
// //         fontSize: '0.95em',
// //     },
// //     input: {
// //         width: 'calc(100% - 20px)', // Full width minus padding
// //         padding: '12px',
// //         marginBottom: '20px',
// //         background: 'rgba(255, 255, 255, 0.08)', // Slightly transparent white input background
// //         border: '1px solid rgba(0, 255, 200, 0.4)', // Faded neon border
// //         borderRadius: '8px',
// //         color: '#fff',
// //         fontSize: '1.0em',
// //         transition: 'border-color 0.3s, box-shadow 0.3s',
// //         '&:focus': {
// //             borderColor: 'var(--main-color, #00ffc8)',
// //             boxShadow: '0 0 10px rgba(0, 255, 200, 0.6)',
// //             outline: 'none',
// //         },
// //     },
// //     button: {
// //         backgroundColor: 'var(--main-color, #00ffc8)',
// //         color: '#000',
// //         border: 'none',
// //         padding: '15px 30px',
// //         borderRadius: '8px',
// //         cursor: 'pointer',
// //         fontWeight: 'bold',
// //         fontSize: '1.1em',
// //         textTransform: 'uppercase',
// //         transition: 'background-color 0.3s, box-shadow 0.3s',
// //         boxShadow: '0 0 15px rgba(0, 255, 200, 0.7)',
// //         width: '100%',
// //         marginTop: '10px',
// //     },
// //     forgotPassword: {
// //         color: 'var(--text-faded, #a0a0a0)',
// //         fontSize: '0.9em',
// //         marginTop: '20px',
// //         display: 'block',
// //         textDecoration: 'none',
// //         '&:hover': {
// //             color: 'var(--main-color, #00ffc8)',
// //         },
// //     },
// //     footerText: {
// //         color: 'var(--text-faded, #a0a0a0)',
// //         fontSize: '0.8em',
// //         marginTop: '30px',
// //     },
// //     link: {
// //         color: 'var(--main-color, #00ffc8)',
// //         textDecoration: 'none',
// //         '&:hover': {
// //             textDecoration: 'underline',
// //         },
// //     }
// // };

// // // --- Main LoginPage Component ---

// // const LoginPage = ({ onLoginSuccess }) => {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         setError(''); // Clear previous errors

// //         // Basic validation (replace with actual authentication logic)
// //         if (username === 'demo' && password === 'password') {
// //             onLoginSuccess(); // Call the prop function on successful login
// //         } else {
// //             setError('Invalid username or password. Please try again.');
// //         }
// //     };

// //     return (
// //         <div style={styles.pageContainer}>
// //             <div style={styles.loginCard}>
// //                 <h1 style={styles.h1}>🔐 Enterprise Carbon Insights</h1>
// //                 <p style={styles.tagline}>Sign in to your dashboard</p>

// //                 <form onSubmit={handleSubmit}>
// //                     <div>
// //                         <label htmlFor="username" style={styles.label}>Username:</label>
// //                         <input
// //                             type="text"
// //                             id="username"
// //                             value={username}
// //                             onChange={(e) => setUsername(e.target.value)}
// //                             style={styles.input}
// //                             placeholder="Enter your username"
// //                             required
// //                         />
// //                     </div>
// //                     <div>
// //                         <label htmlFor="password" style={styles.label}>Password:</label>
// //                         <input
// //                             type="password"
// //                             id="password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             style={styles.input}
// //                             placeholder="Enter your password"
// //                             required
// //                         />
// //                     </div>
                    
// //                     {error && <p style={{ color: 'rgba(255, 99, 132, 1)', marginBottom: '15px' }}>{error}</p>}

// //                     <button type="submit" style={styles.button}>
// //                         Log In
// //                     </button>
// //                 </form>

// //                 <a href="#" style={styles.forgotPassword}>Forgot Password?</a>

// //                 <p style={styles.footerText}>
// //                     New user? <a href="#" style={styles.link}>Register Here</a>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginPage;


// import React, { useState } from 'react';

// // --- Reusable Styles (unchanged) ---
// const styles = { /* your existing styles unchanged */ };

// // --- Main LoginPage Component ---
// const LoginPage = ({ onLoginSuccess }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             // Call your backend login endpoint
//             const response = await fetch('http://localhost:8000/api/v1/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (!response.ok) {
//                 throw new Error('Invalid username or password.');
//             }

//             const data = await response.json();

//             // If backend confirms login success
//             if (data.success) {
//                 onLoginSuccess(); // Callback to redirect to dashboard
//             } else {
//                 setError(data.message || 'Login failed.');
//             }
//         } catch (err) {
//             console.error(err);
//             setError(err.message || 'Login failed.');
//         }
//     };

//     const handleForgotPassword = async () => {
//         if (!username) {
//             alert('Please enter your username/email to reset password.');
//             return;
//         }

//         try {
//             const response = await fetch(`http://localhost:8000/api/v1/forgot-password?username=${encodeURIComponent(username)}`);
//             const data = await response.json();
//             alert(data.message || 'Password reset link sent to your email.');
//         } catch (err) {
//             console.error(err);
//             alert('Failed to send password reset email.');
//         }
//     };

//     const handleRegister = () => {
//         // Open registration page (or you can redirect within your app)
//         window.location.href = '/register';
//     };

//     return (
//         <div style={styles.pageContainer}>
//             <div style={styles.loginCard}>
//                 <h1 style={styles.h1}>🔐 Enterprise Carbon Insights</h1>
//                 <p style={styles.tagline}>Sign in to your dashboard</p>

//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="username" style={styles.label}>Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             style={styles.input}
//                             placeholder="Enter your username"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" style={styles.label}>Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             style={styles.input}
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
                    
//                     {error && <p style={{ color: 'rgba(255, 99, 132, 1)', marginBottom: '15px' }}>{error}</p>}

//                     <button type="submit" style={styles.button}>
//                         Log In
//                     </button>
//                 </form>

//                 <a href="#" style={styles.forgotPassword} onClick={handleForgotPassword}>Forgot Password?</a>

//                 <p style={styles.footerText}>
//                     New user? <a href="#" style={styles.link} onClick={handleRegister}>Register Here</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



import React, { useState } from 'react';

const styles = {
    pageContainer: {
        background: 'rgba(0, 5, 10, 0.98)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto, sans-serif',
        color: 'var(--text-color, #ffffff)',
    },
    loginCard: {
        background: 'rgba(5, 15, 25, 0.95)',
        border: '1px solid var(--main-color, #00ffc8)',
        boxShadow: '0 0 25px rgba(0, 255, 200, 0.6)',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '450px',
        width: '90%',
        textAlign: 'center',
    },
    h1: {
        color: 'var(--main-color, #00ffc8)',
        fontSize: '2.2em',
        marginBottom: '10px',
        textShadow: '0 0 8px rgba(0, 255, 200, 0.7)',
    },
    tagline: {
        color: 'var(--text-faded, #a0a0a0)',
        fontSize: '1.0em',
        marginBottom: '30px',
    },
    label: {
        display: 'block',
        color: 'var(--text-faded, #a0a0a0)',
        marginBottom: '8px',
        textAlign: 'left',
        fontSize: '0.95em',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '12px',
        marginBottom: '20px',
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(0, 255, 200, 0.4)',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '1.0em',
    },
    button: {
        backgroundColor: 'var(--main-color, #00ffc8)',
        color: '#000',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1.1em',
        textTransform: 'uppercase',
        transition: 'background-color 0.3s, box-shadow 0.3s',
        boxShadow: '0 0 15px rgba(0, 255, 200, 0.7)',
        width: '100%',
        marginTop: '10px',
    },
    forgotPassword: {
        color: 'var(--text-faded, #a0a0a0)',
        fontSize: '0.9em',
        marginTop: '20px',
        display: 'block',
        textDecoration: 'none',
    },
    footerText: {
        color: 'var(--text-faded, #a0a0a0)',
        fontSize: '0.8em',
        marginTop: '30px',
    },
    link: {
        color: 'var(--main-color, #00ffc8)',
        textDecoration: 'none',
    }
};

const API_BASE = "http://127.0.0.1:8014/api/v1"; // ✅ Backend URL

const LoginPage = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [mode, setMode] = useState('login'); // "login" | "register" | "forgot"
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            if (mode === 'login') {
                const res = await fetch(`${API_BASE}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });
                const data = await res.json();
                if (data.success) {
                    setMessage('✅ Login successful!');
                    onLoginSuccess();
                } else {
                    setError(data.message || 'Invalid username or password.');
                }
            } 
            else if (mode === 'register') {
                const res = await fetch(`${API_BASE}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password }),
                });
                const data = await res.json();
                if (data.success) {
                    setMessage('✅ Registration successful! Please login.');
                    setMode('login');
                } else {
                    setError(data.message || 'Registration failed.');
                }
            } 
            else if (mode === 'forgot') {
                const res = await fetch(`${API_BASE}/forgot-password?username=${username}`);
                const data = await res.json();
                setMessage(data.message || 'Password reset link sent (check console).');
            }

        } catch (err) {
            console.error("Login/Register Error:", err);
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.loginCard}>
                <h1 style={styles.h1}>🔐 Enterprise Carbon Insights</h1>
                <p style={styles.tagline}>
                    {mode === 'login' ? 'Sign in to your dashboard' :
                     mode === 'register' ? 'Create your account' :
                     'Recover your password'}
                </p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" style={styles.label}>Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    {mode === 'register' && (
                        <div>
                            <label htmlFor="email" style={styles.label}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={styles.input}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    )}

                    {mode !== 'forgot' && (
                        <div>
                            <label htmlFor="password" style={styles.label}>Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    )}

                    {error && <p style={{ color: 'rgba(255, 99, 132, 1)', marginBottom: '15px' }}>{error}</p>}
                    {message && <p style={{ color: '#00ffc8', marginBottom: '15px' }}>{message}</p>}

                    <button type="submit" style={styles.button}>
                        {mode === 'login' ? 'Log In' :
                         mode === 'register' ? 'Register' :
                         'Send Reset Link'}
                    </button>
                </form>

                {mode === 'login' && (
                    <>
                        <a href="#" style={styles.forgotPassword} onClick={() => setMode('forgot')}>
                            Forgot Password?
                        </a>
                        <p style={styles.footerText}>
                            New user?{" "}
                            <a href="#" style={styles.link} onClick={() => setMode('register')}>
                                Register Here
                            </a>
                        </p>
                    </>
                )}

                {mode !== 'login' && (
                    <p style={styles.footerText}>
                        <a href="#" style={styles.link} onClick={() => setMode('login')}>
                            Back to Login
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
