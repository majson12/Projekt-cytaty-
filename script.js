body {
  margin: 0;
  padding: 0;
  font-family: 'Lora', serif;
  background: url('https://source.unsplash.com/1600x900/?books,library') no-repeat center center fixed;
  background-size: cover;
}

.container {
  text-align: center;
  padding-top: 100px;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
}

.pen-icon {
  width: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

.controls {
  margin: 20px 0;
}

#categorySelect {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
}

button {
  background: linear-gradient(270deg, #ff6f61, #ff3b2e, #ff6f61);
  background-size: 600% 600%;
  animation: gradientAnimation 6s ease infinite;
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.05);
}

@keyframes gradientAnimation {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

.quote-box {
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(0,0,0,0.6);
  width: 80%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 0 10px #000;
}
  
