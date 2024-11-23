
$(document).ready(function () {
  $('.auto-resize-input').on('input', function () {
    resizeInput(this);
  });

  $('#suggestionsBox').on('click', 'li', function () {
    $('#addressInput').val($(this).text());
    resizeInput($('#addressInput')[0]);
    $('#suggestionsBox').html('');
  });
});

function resizeInput(input) {
  var $input = $(input);
  var text = $input.val() || $input.attr('placeholder');
  var $tempSpan = $('<span>').text(text).css({
    'font-family': $input.css('font-family'),
    'font-size': $input.css('font-size'),
    'visibility': 'hidden',
    'white-space': 'pre'
  });
  $('body').append($tempSpan);
  var newWidth = $tempSpan.width() + 10; 
  if ($input.attr('id') === 'inp1') {
    $input.css('width', Math.min(newWidth, 300) + 'px'); 
  } else if ($input.attr('id') === 'addressInput') {
    $input.css('width', Math.min(newWidth, 800) + 'px'); 
  }
  $tempSpan.remove();
}

const addresses = [
  // Indian cities
  "Mumbai, Maharashtra, India",
  "Delhi, Delhi, India",
  "Bangalore, Karnataka, India",
  "Hyderabad, Telangana, India",
  "Ahmedabad, Gujarat, India",
  "Chennai, Tamil Nadu, India",
  "Kolkata, West Bengal, India",
  "Surat, Gujarat, India",
  "Pune, Maharashtra, India",
  "Jaipur, Rajasthan, India",
  "Lucknow, Uttar Pradesh, India",
  "Kanpur, Uttar Pradesh, India",
  "Nagpur, Maharashtra, India",
  "Visakhapatnam, Andhra Pradesh, India",
  "Indore, Madhya Pradesh, India",
  "Thane, Maharashtra, India",
  "Bhopal, Madhya Pradesh, India",
  "Patna, Bihar, India",
  "Vadodara, Gujarat, India",
  "Ghaziabad, Uttar Pradesh, India",
  "Ludhiana, Punjab, India",
  "Coimbatore, Tamil Nadu, India",
  "Agra, Uttar Pradesh, India",
  "Madurai, Tamil Nadu, India",
  "Nashik, Maharashtra, India",
  "Faridabad, Haryana, India",
  "Meerut, Uttar Pradesh, India",
  "Rajkot, Gujarat, India",
  "Varanasi, Uttar Pradesh, India",
  "Srinagar, Jammu and Kashmir, India",
  "Aurangabad, Maharashtra, India",
  "Dhanbad, Jharkhand, India",
  "Amritsar, Punjab, India",
  "Navi Mumbai, Maharashtra, India",
  "Allahabad, Uttar Pradesh, India",
  "Howrah, West Bengal, India",
  "Ranchi, Jharkhand, India",
  "Gwalior, Madhya Pradesh, India",
  "Jabalpur, Madhya Pradesh, India",
  "Vijayawada, Andhra Pradesh, India",
  "Jodhpur, Rajasthan, India",
  "Raipur, Chhattisgarh, India",
  "Kota, Rajasthan, India",
  "Guwahati, Assam, India",
  "Chandigarh, Chandigarh, India",
  "Thiruvananthapuram, Kerala, India",
  "Solapur, Maharashtra, India",
  "Hubli–Dharwad, Karnataka, India",
  "Tiruchirappalli, Tamil Nadu, India",
  "Bareilly, Uttar Pradesh, India",
  "Moradabad, Uttar Pradesh, India",
  "Mysore, Karnataka, India",
  "Tiruppur, Tamil Nadu, India",
  "Gurgaon, Haryana, India",
  "Aligarh, Uttar Pradesh, India",
  "Jalandhar, Punjab, India",
  "Bhubaneswar, Odisha, India",
  "Salem, Tamil Nadu, India",
  "Warangal, Telangana, India",
  "Guntur, Andhra Pradesh, India",
  "Bhiwandi, Maharashtra, India",
  "Saharanpur, Uttar Pradesh, India",
  "Gorakhpur, Uttar Pradesh, India",
  "Bikaner, Rajasthan, India",
  "Amravati, Maharashtra, India",
  "Noida, Uttar Pradesh, India",
  "Jamshedpur, Jharkhand, India",
  "Bhilai, Chhattisgarh, India",
  "Cuttack, Odisha, India",
  "Firozabad, Uttar Pradesh, India",
  "Kochi, Kerala, India",
  "Nellore, Andhra Pradesh, India",
  "Bhavnagar, Gujarat, India",
  "Dehradun, Uttarakhand, India",
  "Durgapur, West Bengal, India",
  "Asansol, West Bengal, India",
  "Rourkela, Odisha, India",
  "Nanded, Maharashtra, India",
  "Kolhapur, Maharashtra, India",
  "Ajmer, Rajasthan, India",
  "Akola, Maharashtra, India",
  "Gulbarga, Karnataka, India",
  "Jamnagar, Gujarat, India",
  "Ujjain, Madhya Pradesh, India",
  "Loni, Uttar Pradesh, India",
  "Siliguri, West Bengal, India",
  "Jhansi, Uttar Pradesh, India",
  "Ulhasnagar, Maharashtra, India",
  "Jammu, Jammu and Kashmir, India",
  "Sangli-Miraj & Kupwad, Maharashtra, India",
  "Mangalore, Karnataka, India",
  "Erode, Tamil Nadu, India",
  "Belgaum, Karnataka, India",
  "Kurnool, Andhra Pradesh, India",
  "Ambattur, Tamil Nadu, India",
  "Rajahmundry, Andhra Pradesh, India",
  "Tirunelveli, Tamil Nadu, India",
  "Malegaon, Maharashtra, India",
  "Gaya, Bihar, India",
  "Jalgaon, Maharashtra, India",
  "Udaipur, Rajasthan, India",
  "Maheshtala, West Bengal, India",
  "Tirupati, Andhra Pradesh, India",
  "Davanagere, Karnataka, India",
  "Kozhikode, Kerala, India",
  "Akbarpur, Uttar Pradesh, India",
  "Kurnool, Andhra Pradesh, India",
  "Kadapa, Andhra Pradesh, India",
  "Kakinada, Andhra Pradesh, India",
  "Katihar, Bihar, India",
  "Sambalpur, Odisha, India",
  "Bettiah, Bihar, India",
  "Purnia, Bihar, India",
  "Hapur, Uttar Pradesh, India",
  "Bharatpur, Rajasthan, India",
  "Begusarai, Bihar, India",
  "Sikar, Rajasthan, India",
  "Thoothukudi, Tamil Nadu, India",
  "Rewa, Madhya Pradesh, India",
  "Mirzapur, Uttar Pradesh, India",
  "Raichur, Karnataka, India",
  "Pali, Rajasthan, India",
  "Ramagundam, Telangana, India",
  "Hapur, Uttar Pradesh, India",
  "Rourkela, Odisha, India",
  "Panipat, Haryana, India",
  "Durg, Chhattisgarh, India",
  "Imphal, Manipur, India",
  "Anantapur, Andhra Pradesh, India",
  "Etawah, Uttar Pradesh, India",
  "Darbhanga, Bihar, India",
  "Bulandshahr, Uttar Pradesh, India",
  "Hindupur, Andhra Pradesh, India",
  "Nangloi Jat, Delhi, India",
  "Bhagalpur, Bihar, India",
  "Latur, Maharashtra, India",
  "Sagar, Madhya Pradesh, India",
  "Shivamogga, Karnataka, India",
  "Ratlam, Madhya Pradesh, India",
  "Modinagar, Uttar Pradesh, India",
  "Pathankot, Punjab, India",
  "Bhiwani, Haryana, India",
  "Fatehpur, Uttar Pradesh, India",
  "Raebareli, Uttar Pradesh, India",
  "Hajipur, Bihar, India",
  "Deoghar, Jharkhand, India",
  "Orai, Uttar Pradesh, India",
  "Bhind, Madhya Pradesh, India",
  "Tonk, Rajasthan, India",
  "Kolar, Karnataka, India",
  "Alappuzha, Kerala, India",
  "Darjeeling, West Bengal, India",
  "Aizawl, Mizoram, India",
  "Ichalkaranji, Maharashtra, India",
  "Tirupathur, Tamil Nadu, India",
  "Hospet, Karnataka, India",
  "Kumbakonam, Tamil Nadu, India",
  "Buxar, Bihar, India",
  "Nagaon, Assam, India",
  "Guna, Madhya Pradesh, India",
  "Kottayam, Kerala, India",
  "Shimla, Himachal Pradesh, India",
  "Hoshiarpur, Punjab, India",
  "Bankura, West Bengal, India",
  "Morena, Madhya Pradesh, India",
  "Amroha, Uttar Pradesh, India",
  "Port Blair, Andaman and Nicobar Islands, India",
  "Kashipur, Uttarakhand, India",
  "Arrah, Bihar, India",
  "Satna, Madhya Pradesh, India",
  "Mau, Uttar Pradesh, India",
  "Sonipat, Haryana, India",
  "Raniganj, West Bengal, India",
  "Kollam, Kerala, India",
  "Muzaffarnagar, Uttar Pradesh, India",
  "Bharatpur, Rajasthan, India",
  "Ambala, Haryana, India",
  "Kohima, Nagaland, India",
  "Sultanpur, Uttar Pradesh, India",
  "Dhule, Maharashtra, India",
  "New Delhi, Delhi, India",
  "Vizianagaram, Andhra Pradesh, India",
  "Motihari, Bihar, India",
  "Haldwani, Uttarakhand, India",
  "Baranagar, West Bengal, India",
  "Karimnagar, Telangana, India",
  "Thanjavur, Tamil Nadu, India",
  "Bongaigaon, Assam, India",
  "Bhuj, Gujarat, India",
  "Porbandar, Gujarat, India",
  "Palakkad, Kerala, India",
  "Anand, Gujarat, India",
  "Pilibhit, Uttar Pradesh, India",
  "Dimapur, Nagaland, India",
  "Ratnagiri, Maharashtra, India",
  "Srikakulam, Andhra Pradesh, India",
  "Suryapet, Telangana, India",
  "Surendranagar Dudhrej, Gujarat, India",
  "Pudukkottai, Tamil Nadu, India",
  "Hazaribagh, Jharkhand, India",
  "Madanapalle, Andhra Pradesh, India",
  "Karaikudi, Tamil Nadu, India",
  "Saharsa, Bihar, India",
  "Dibrugarh, Assam, India",
  "Gangtok, Sikkim, India",
  "Bansberia, West Bengal, India",
  "Bhimavaram, Andhra Pradesh, India",
  "Ongole, Andhra Pradesh, India",
  "Srikalahasti, Andhra Pradesh, India",
  "Khammam, Telangana, India",
  "Mahbubnagar, Telangana, India",
  "Chittoor, Andhra Pradesh, India",
  "Gadag-Betageri, Karnataka, India",
  "Chhindwara, Madhya Pradesh, India",
  "Rae Bareli, Uttar Pradesh, India",
  "Vidisha, Madhya Pradesh, India",
  "Godhra, Gujarat, India",
  "Bhusawal, Maharashtra, India",
  "Sirsa, Haryana, India",
  "Danapur, Bihar, India",
  "Gudivada, Andhra Pradesh, India",
  "Adoni, Andhra Pradesh, India",
  "Tenali, Andhra Pradesh, India",
  "Hindupur, Andhra Pradesh, India",
  "Bhimavaram, Andhra Pradesh, India",
  "Guntakal, Andhra Pradesh, India",
  "Suryapet, Telangana, India",
  "Miryalaguda, Telangana, India",
  "Khammam, Telangana, India",
  "Mahbubnagar, Telangana, India",
  "Kothagudem, Telangana, India",
  "Nagari, Andhra Pradesh, India",
  "Ponnur, Andhra Pradesh, India",
  "Narasaraopet, Andhra Pradesh, India",
  "Bapatla, Andhra Pradesh, India",
  "Kavali, Andhra Pradesh, India",
  "Nellore, Andhra Pradesh, India",
  "Tadepalligudem, Andhra Pradesh, India",
  "Eluru, Andhra Pradesh, India",
  "Chilakaluripet, Andhra Pradesh, India",
  "Machilipatnam, Andhra Pradesh, India",
  "Vijayawada, Andhra Pradesh, India",
  "Jaggayyapeta, Andhra Pradesh, India",
  "Gudivada, Andhra Pradesh, India",
  "Tenali, Andhra Pradesh, India",
  "Mangalagiri, Andhra Pradesh, India",
  "Bhimavaram, Andhra Pradesh, India",
  "Nidadavole, Andhra Pradesh, India",
  "Rajahmundry, Andhra Pradesh, India",
  "Ramachandrapuram, Andhra Pradesh, India",
  "Tuni, Andhra Pradesh, India",
  "Srikakulam, Andhra Pradesh, India",
  "Tekkali, Andhra Pradesh, India",
  "Palasa Kasibugga, Andhra Pradesh, India",
  "Parvathipuram, Andhra Pradesh, India",
  "Salur, Andhra Pradesh, India",
  "Vizianagaram, Andhra Pradesh, India",
  "Pithapuram, Andhra Pradesh, India",
  "Peddapuram, Andhra Pradesh, India",
  "Samalkot, Andhra Pradesh, India",
  "Kakinada, Andhra Pradesh, India",
  "Rajamahendravaram, Andhra Pradesh, India",
  "Narasapuram, Andhra Pradesh, India",
  "Tadepalligudem, Andhra Pradesh, India",
  "Tanuku, Andhra Pradesh, India",
  "Kovvur, Andhra Pradesh, India",
  "Nuzvid, Andhra Pradesh, India",
  "Vuyyuru, Andhra Pradesh, India",
  "Machilipatnam, Andhra Pradesh, India",
  "Pedana, Andhra Pradesh, India",
  "Mangalagiri, Andhra Pradesh, India",
  "Nandigama, Andhra Pradesh, India",
  "Jaggayyapeta, Andhra Pradesh, India",
  "Vijayawada, Andhra Pradesh, India",
  "Gudivada, Andhra Pradesh, India",
  "Machilipatnam, Andhra Pradesh, India",
  "Repalle, Andhra Pradesh, India",
  "Tenali, Andhra Pradesh, India",
  "Ponnur, Andhra Pradesh, India",
  "Chilakaluripet, Andhra Pradesh, India",
  "Narasaraopet, Andhra Pradesh, India",
  "Sattenapalle, Andhra Pradesh, India",
  "Vinukonda, Andhra Pradesh, India",
  "Nandigama, Andhra Pradesh, India",
  "Jaggaiahpet, Andhra Pradesh, India",
  "Bapatla, Andhra Pradesh, India",
  "Pamur, Andhra Pradesh, India",
  "Ongole, Andhra Pradesh, India",
  "Markapur, Andhra Pradesh, India",
  "Giddalur, Andhra Pradesh, India",
  "Nandyal, Andhra Pradesh, India",
  "Adoni, Andhra Pradesh, India",
  "Yemmiganur, Andhra Pradesh, India",
  "Nandikotkur, Andhra Pradesh, India",
  "Banaganapalle, Andhra Pradesh, India",
  "Kurnool, Andhra Pradesh, India",
  "Nandikotkur, Andhra Pradesh, India",
  "Gudur, Andhra Pradesh, India",
  "Atmakur, Andhra Pradesh, India",
  "Kavali, Andhra Pradesh, India",
  "Sullurpeta, Andhra Pradesh, India",
  "Nellore, Andhra Pradesh, India",
  "Venkatagiri, Andhra Pradesh, India",
  "Srikalahasti, Andhra Pradesh, India",
  "Tirupati, Andhra Pradesh, India",
  "Puttur, Andhra Pradesh, India",
  "Renigunta, Andhra Pradesh, India",
  "Madanapalle, Andhra Pradesh, India",
  "Punganur, Andhra Pradesh, India",
  "Rayachoti, Andhra Pradesh, India",
  "Jammalamadugu, Andhra Pradesh, India",
  "Proddatur, Andhra Pradesh, India",
  "Mydukur, Andhra Pradesh, India",
  "Rajampet, Andhra Pradesh, India",
  "Kadapa, Andhra Pradesh, India",
  "Badvel, Andhra Pradesh, India",
  "Kalyandurg, Andhra Pradesh, India",
  "Dharmavaram, Andhra Pradesh, India",
  "Tadpatri, Andhra Pradesh, India",
  "Gooty, Andhra Pradesh, India",
  "Anantapur, Andhra Pradesh, India",
  "Kadiri, Andhra Pradesh, India",
  "Hindupur, Andhra Pradesh, India",
  "Penukonda, Andhra Pradesh, India",
  "Madakasira, Andhra Pradesh, India",
  "Chittoor, Andhra Pradesh, India",
  "Srikalahasti, Andhra Pradesh, India",
  "Puttur, Andhra Pradesh, India",
  "Nagari, Andhra Pradesh, India",
  "Pileru, Andhra Pradesh, India",
  "Chandragiri, Andhra Pradesh, India",
  "Tirupati, Andhra Pradesh, India",
  "Renigunta, Andhra Pradesh, India",
  "Srikalahasti, Andhra Pradesh, India",
  "Nellore, Andhra Pradesh, India",
  "Kavali, Andhra Pradesh, India",
  "Gudur, Andhra Pradesh, India",
  "Atmakur, Andhra Pradesh, India",
  "Venkatagiri, Andhra Pradesh, India",
  "Sullurpeta, Andhra Pradesh, India",
  "Gudur, Andhra Pradesh, India",
  "Kavali, Andhra Pradesh, India",
  "Nellore, Andhra Pradesh, India",
  "Kadapa, Andhra Pradesh, India",
  "Rajampet, Andhra Pradesh, India",
  "Rayachoti, Andhra Pradesh, India",
  "Proddatur, Andhra Pradesh, India",
  "Jammalamadugu, Andhra Pradesh, India",
  "Tadipatri, Andhra Pradesh, India",
  "Guntakal, Andhra Pradesh, India",
  "Adoni, Andhra Pradesh, India",
  "Mancherial, Telangana, India",
  "Nirmal, Telangana, India",
  "Adilabad, Telangana, India",
  "Bellampalle, Telangana, India",
  "Kagaznagar, Telangana, India",
  "Mandamarri, Telangana, India",
  "Mancherial, Telangana, India",










  // Foreign cities
  "New York, USA",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Sydney, Australia",
];

const addressInput = document.getElementById('addressInput');
const suggestionsBox = document.getElementById('suggestionsBox');

addressInput.addEventListener('input', function () {
  const inputText = this.value.trim().toLowerCase();
  const suggestions = addresses.filter(address => address.toLowerCase().includes(inputText)).slice(0, 5); // Limit to 5 suggestions
  showSuggestions(suggestions);
});

function showSuggestions(suggestions) {
  if (suggestions.length === 0) {
    suggestionsBox.innerHTML = '';
    return;
  }
  const html = suggestions.map(suggestion => `<li><i class="fas fa-plane location-text"></i>${suggestion}</li>`).join('');
  suggestionsBox.innerHTML = `<ul>${html}</ul>`;
}

suggestionsBox.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    addressInput.value = event.target.textContent;
    resizeInput(addressInput);
    suggestionsBox.innerHTML = '';
  }
});

document.addEventListener('click', function (event) {
  if (!event.target.matches('#addressInput')) {
    suggestionsBox.innerHTML = '';
  }
});

const inputBox = document.getElementById('addressInput');
inputBox.addEventListener('input', function () {
  const inputText = inputBox.value;
  if (inputText.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }
  const suggestions = addresses.filter(address =>
    address.toLowerCase().startsWith(inputText.toLowerCase())
  );
  if (suggestions.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }
  suggestionsBox.style.display = 'block';
});





