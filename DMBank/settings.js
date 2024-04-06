const settings = {
  theme: 'white'
};



if (settings.theme === 'white') {
  console.log('Theme is white');
  settings.theme === 'white'
  document.getElementById('analystIcon').src = 'img/chart-simple-solid 1.svg';
  document.getElementById('homeIcon').src = 'img/vector.svg';
} else if (settings.theme === 'dark') {
  console.log('Theme is dark');
  document.body.classList.toggle('dark-theme')
  document.getElementById('analystIcon').src = 'img/chart-simple-solid (white).svg';
  document.getElementById('homeIcon').src = 'img/house-solid (white).svg';
} else {
  console.log('Theme is neither white nor black');
  settings.theme === 'white'
}




// For console
function switchTheme() {
  console.log('Admin console, function:', switchTheme);
  if (settings.theme === 'white') {
    console.log('Switching to dark theme');
    settings.theme = 'dark';
    document.getElementById('analystIcon').src = 'img/chart-simple-solid (white).svg';
    document.getElementById('homeIcon').src = 'img/house-solid (white).svg';
    document.body.classList.add('dark-theme');
  } else if (settings.theme === 'dark') {
    console.log('Switching to white theme');
    settings.theme = 'white';
    document.getElementById('analystIcon').src = 'img/chart-simple-solid 1.svg';
    document.getElementById('homeIcon').src = 'img/vector.svg';
    document.body.classList.remove('dark-theme');
  } else {
    alert('mistake in swithTheme()')
  }
}
//
