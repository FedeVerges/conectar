import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useAuthStore } from '../../contexts/useAuthStore';
import logo from '../../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser({
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName,
          token,
        });
        navigate('/home');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate, setUser]);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      setUser({
        uid: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName,
        token,
      });
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('Error al iniciar sesión con Google');
      setLoading(false);
    }
  };

  const handleEmailLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();

      setUser({
        uid: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName,
        token,
      });
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('Correo o contraseña incorrectos');
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: 200, height: 'auto', mb: 1 }}
        />

        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Iniciar sesión
        </Typography>

        {loading ? (
          <Box textAlign="center">
            <CircularProgress />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Procesando...
            </Typography>
          </Box>
        ) : (
          <>
            <Button
              onClick={handleGoogleLogin}
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#007A5E',
                '&:hover': { backgroundColor: '#005f49' },
                borderRadius: 50,
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Iniciar sesión con Google
            </Button>

            <Divider sx={{ width: '100%' }}>o</Divider>

            <TextField
              label="Correo electrónico"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              variant="outlined"
            />
            <TextField
              label="Contraseña"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              variant="outlined"
            />

            <Button
              onClick={handleEmailLogin}
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 50,
                textTransform: 'none',
                fontWeight: 'bold',
                borderColor: '#007A5E',
                color: '#007A5E',
                '&:hover': {
                  backgroundColor: '#f1fefb',
                  borderColor: '#005f49',
                  color: '#005f49',
                },
              }}
            >
              Ingresar con correo
            </Button>

            {error && (
              <Typography color="error" variant="body2" textAlign="center">
                {error}
              </Typography>
            )}
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
