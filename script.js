 //    to close modal
 document
 .getElementById("globalIcon1")
 .addEventListener("click", function () {
   $("#preferencesModal").modal("show");
 });
document
 .getElementById("globalIcon2")
 .addEventListener("click", function () {
   $("#preferencesModal").modal("show");
 });
document
 .getElementById("globalIcon3")
 .addEventListener("click", function () {
   $("#preferencesModal").modal("show");
 });

// Close modal using JavaScript
document
 .getElementById("closeModalButton")
 .addEventListener("click", function () {
   $("#preferencesModal").modal("hide");
 });

const more = document.getElementById("readMore");
const less = document.getElementById("readLess");

more.addEventListener("click", function () {
 more.style.display = "none";
 less.style.display = "flex";
});
less.addEventListener("click", function () {
 less.style.display = "none";
 more.style.display = "flex";
});

$(document).ready(function () {
 $(".heart-icons").on("click", function () {
   $(this).toggleClass("filled");
   if ($(this).hasClass("filled")) {
     $(this)
       .removeClass("fa-regular fa-heart")
       .addClass("fa-solid fa-heart");
   } else {
     $(this)
       .removeClass("fa-solid fa-heart")
       .addClass("fa-regular fa-heart");
   }
 });
});

//  JS for handling the horizontal click
$(document).ready(function () {
 var multipleCardCarousel = document.querySelector(
   "#carouselExampleControls"
 );
 if (window.matchMedia("(min-width: 768px)").matches) {
   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
   var cardWidth = $(".carousel-item").outerWidth(true);
   var scrollPosition = 0;
   $("#carouselExampleControls .carousel-control-next").on(
     "click",
     function () {
       if (scrollPosition < carouselWidth - cardWidth * 3) {
         scrollPosition += cardWidth;
         $("#carouselExampleControls .carousel-inner").animate(
           { scrollLeft: scrollPosition },
           200
         );
       }
     }
   );
   $("#carouselExampleControls .carousel-control-prev").on(
     "click",
     function () {
       if (scrollPosition > 0) {
         scrollPosition -= cardWidth;
         $("#carouselExampleControls .carousel-inner").animate(
           { scrollLeft: scrollPosition },
           200
         );
       }
     }
   );
 } else {
   $(multipleCardCarousel).addClass("slide");
 }
});

// jS for star handling
document.querySelectorAll(".star-rating input").forEach((input) => {
 input.addEventListener("change", () => {
   let value = input.value;
   document
     .querySelectorAll(".star-rating label")
     .forEach((label, index) => {
       if (index < 5 - value) {
         label.style.color = "#ccc";
       } else {
         label.style.color = "gold";
       }
     });
 });
});

document.querySelectorAll('.region-language button').forEach(button => {
  button.addEventListener('click', function() {
  
    document.querySelectorAll('.region-language button').forEach(btn => {
      btn.classList.remove('selected');
      btn.classList.add('btn-outline-dark'); 
    });

    this.classList.add('selected');
    this.classList.remove('btn-outline-dark'); 
  });
});

   document.querySelectorAll('.loading-button').forEach(button => {
            button.addEventListener('click', function() {
                button.classList.add('loading');
                // button.disabled = true;

                // Simulate a network request (e.g., sign-in process)
                setTimeout(() => {
                    button.classList.remove('loading');
                    button.disabled = false;
                    // Add your success logic here
                }, 3000); // Simulate a delay of 3 seconds
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
          const showMoreLinks = document.querySelectorAll('.show-more');
  
          showMoreLinks.forEach(link => {
              link.addEventListener('click', function(e) {
                  e.preventDefault();
                  const extraContent = this.parentNode.querySelector('.extra-content');
                  if (extraContent.style.display === 'none') {
                      extraContent.style.display = 'block';
                      this.textContent = '<-- View less'; // Change text to 'View less'
                  } else {
                      extraContent.style.display = 'none';
                      this.textContent = 'View more -->'; // Change text back to 'View more'
                  }
              });
          });
      });


      
      
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
  var newWidth = $tempSpan.width() + 10; // Add some padding
  if ($input.attr('id') === 'inp1') {
    $input.css('width', Math.min(newWidth, 300) + 'px'); // Maximum width for inp1
  } else if ($input.attr('id') === 'addressInput') {
    $input.css('width', Math.min(newWidth, 800) + 'px'); // Maximum width for addressInput
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
  const html = suggestions.map(suggestion => `<li class=" border-bottom border-secondary-subtle"><i class="fas fa-plane mx-1 location-text"></i>${suggestion}</li>`).join('');
  suggestionsBox.innerHTML = `<ul class=" fw-bold ">${html}</ul>`;
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




document.querySelectorAll('.clickable').forEach(function(element) {
  element.addEventListener('click', function() {
    this.classList.toggle('active');
    this.classList.toggle('animate__animated');
    this.classList.toggle('animate__bounce');
    
    
    const helpfulText = this.parentNode.querySelector('#helpfulText');
    if (helpfulText) {
      helpfulText.classList.toggle('active');
    }
  });
});

document.querySelectorAll('.btn').forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.btn').forEach(function(btn) {
      btn.classList.remove('active1');
      btn.classList.remove('btn-dark');
      btn.classList.add('btn-outline-dark');
      btn.style.color = ''; 
    });

    // Add active class to the clicked button
    this.classList.add('active1');
    this.classList.remove('btn-outline-dark');
    this.classList.add('btn-dark');
    this.style.color = 'white';
  });
});



  
    function validateForm() {
      let isValid = true;
  
      // Reset all error messages and borders
      resetErrors();
  
      // Validate email
      const email = document.getElementById('inputEmail');
      const emailError = document.getElementById('emailError');
      if (email.value.trim() === '') {
          emailError.style.display = 'inline';
          email.classList.add('is-invalid');
          isValid = false;
      }
  
      // Validate subject
      const subject = document.getElementById('inputSubject');
      const subjectError = document.getElementById('subjectError');
      if (subject.value.trim() === '') {
          subjectError.style.display = 'inline';
          subject.classList.add('is-invalid');
          isValid = false;
      }
  
      // Validate message
      const message = document.getElementById('inputMessage');
      const messageError = document.getElementById('messageError');
      if (message.value.trim() === '') {
          messageError.style.display = 'inline';
          message.classList.add('is-invalid');
          isValid = false;
      }
  
    
      const agreeCheckbox = document.getElementById('agreeCheckbox');
      const checkboxError = document.getElementById('checkboxError');
      if (!agreeCheckbox.checked) {
          checkboxError.style.display = 'inline';
          isValid = false;
      }
  
  
      if (!isValid) {
          return false;
      }
  
      
      handleFormSubmission();
  
      return true;
  }
  
  function resetErrors() {
    
      const inputs = document.getElementsByTagName('input');
      for (let input of inputs) {
          input.classList.remove('is-invalid');
      }
  
      const textareas = document.getElementsByTagName('textarea');
      for (let textarea of textareas) {
          textarea.classList.remove('is-invalid');
      }
  
      const errorSpans = document.getElementsByClassName('error');
      for (let errorSpan of errorSpans) {
          errorSpan.style.display = 'none';
      }
  }
  
 
  $(document).ready(function() {
    // Check if the modal has been closed before
    if (!localStorage.getItem('popupModalClosed')) {
      // Show the modal after 5 seconds
      setTimeout(function() {
        $('#popupModal').modal('show');
      }, 5000);
  
      // Show the modal on scroll if it's not already shown
      $(window).on('scroll', function() {
        if (!$('#popupModal').hasClass('show') && $(window).scrollTop() > 100) {
          $('#popupModal').modal('show');
        }
      });
    }
  
    // Prevent scrolling when modal is open
    $('#popupModal').on('shown.bs.modal', function() {
      $('body').addClass('modal-open');
    });
  
    // Allow scrolling when modal is closed
    $('#popupModal').on('hidden.bs.modal', function () {
      $('body').removeClass('modal-open');
    });
  
    // Set the localStorage flag and hide the modal on close button click
    $('.close').on('click', function() {
      $('#popupModal').modal('hide');
      localStorage.setItem('popupModalClosed', 'true');
    });
  
    // Ensure the modal is not triggered again if localStorage flag is set
    $('#popupModal').on('hide.bs.modal', function() {
      if (localStorage.getItem('popupModalClosed')) {
        $(window).off('scroll');
      }
    });
  });
  
  
  
  $(document).ready(function() {
    $('#InButton').on('click', function() {
      $('#signinModal').modal('show');
    });

    $('#signinModal').on('shown.bs.modal', function() {
      $('body').addClass('modal-open');
    });

    $('#signinModal').on('hidden.bs.modal', function () {
      $('body').removeClass('modal-open');
    });

    $('.close').on('click', function() {
      $('#signinModal').modal('hide');
    });
  });
    
  $(document).ready(function() {
    $('#form').on('submit', function(event) {
      event.preventDefault();
      
      let isValid = true;

      if ($('#form1Example23').val().trim() === '') {
        $('#form1Example23').addClass('is-invalid');
        isValid = false;
      } else {
        $('#form1Example23').removeClass('is-invalid');
      }

      if (isValid) {
 
        alert('Form submitted successfully!');
      } else {

        alert('Please fill in the required fields.');
      }
    });

    $('#form1Example23').on('input', function() {
      if ($(this).val().trim() === '') {
        $(this).addClass('is-invalid');
      } else {
        $(this).removeClass('is-invalid');
      }
    });
  });
