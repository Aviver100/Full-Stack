const destinations = [
    { name: 'קבוצת הדיונים', url: 'https://bit.ly/3RukYZ1' },
    { name: 'פראג', url: 'https://bit.ly/3Rsfa1T' },
    { name: 'בודפשט', url: 'https://bit.ly/3uCgu9t' },
    { name: 'יוון', url: 'https://bit.ly/3RtGJrG' },
    { name: 'אוסטריה', url: 'https://bit.ly/3Guk9ZG' },
    { name: 'פולין', url: 'https://bit.ly/46Px0jL' },
    { name: 'ארה"ב', url: 'https://bit.ly/49YlyFo' },
    { name: 'קפריסין', url: 'https://bit.ly/4a8dO3A' },
    { name: 'איטליה', url: 'https://bit.ly/3uOG23y' },
    { name: 'דובאי והאמירויות', url: 'https://bit.ly/46Id5mX' },
    { name: 'פריז', url: 'https://bit.ly/417189k' },
    { name: 'רומניה', url: 'https://bit.ly/3NAHInR' },
    { name: 'חבל זלצבורג', url: 'https://bit.ly/47HZL3k' },
    { name: 'לונדון', url: 'https://bit.ly/londontravell' },
    { name: 'אמסטרדם והולנד', url: 'https://bit.ly/4ajTjBt' },
    { name: 'בולגריה', url: 'https://bit.ly/4a7nADd' },
    { name: 'ברצלונה', url: 'https://bit.ly/3R7xUCG' },
    { name: 'גאורגיה', url: 'https://bit.ly/3Razd3t' },
    { name: 'האלפים הצרפתים', url: 'https://bit.ly/3R7seIO' },
    { name: 'מדריד', url: 'https://bit.ly/3tdjGYK' },
    { name: 'היער השחור', url: 'https://bit.ly/3Rw9iod' },
    { name: 'שוויץ', url: 'https://bit.ly/3VpBIBb' },
    { name: 'תאילנד', url: 'https://bit.ly/4clhUpy' }
];

const destinationList = document.getElementById('destinationList');

destinations.forEach(dest => {
    const destElement = document.createElement('div');
    destElement.className = 'destination';
    destElement.textContent = dest.name;
    destElement.addEventListener('click', () => {
        window.open(dest.url, '_blank');
    });
    destinationList.appendChild(destElement);
});