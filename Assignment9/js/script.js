var contacts = [];

var editIndex = -1;

var contactForm = document.getElementById("contactForm");

var nameInput = document.getElementById("nameInput");
var phoneInput = document.getElementById("phoneInput");
var emailInput = document.getElementById("emailInput");
var addressInput = document.getElementById("addressInput");
var favoriteInput = document.getElementById("favoriteInput");
var emergencyInput = document.getElementById("emergencyInput");
var groupInput = document.getElementById("groupInput");
var notesInput = document.getElementById("notesInput");
 var photoInput = document.getElementById("photoInput");
var photoPreview = document.getElementById("photoPreview");

let selectedPhoto = "";

photoInput.addEventListener("change", function () {

    var file = this.files[0];

    if (!file) return;

    var reader = new FileReader();

    reader.onload = function (e) {

        selectedPhoto = e.target.result;

        photoPreview.innerHTML = `
            <img src="${selectedPhoto}" alt="Contact Photo">
        `;
    };

    reader.readAsDataURL(file);
});

var contactsContainer =
    document.getElementById("contactsContainer");

var emptyState =
    document.getElementById("emptyState");

var searchInput =
    document.getElementById("searchInput");

var totalCount =
    document.getElementById("totalCount");

var favoriteCount =
    document.getElementById("favoriteCount");

var emergencyCount =
    document.getElementById("emergencyCount");

var contactsNumber =
    document.getElementById("contactsNumber");

var favoritesContainer =
    document.getElementById("favoritesContainer");

var emergencyContainer =
    document.getElementById("emergencyContainer");

var contactModalElement =
    document.getElementById("contactModal");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    var contact = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
    address: addressInput.value.trim(),
    group: groupInput.value,
    notes: notesInput.value.trim(),
    favorite: favoriteInput.checked,
    emergency: emergencyInput.checked

    };


    if (editIndex !== -1) {

        contacts[editIndex] = contact;

        Swal.fire({

            icon: "success",

            title: "Contact Updated!",

            text: "The contact has been updated successfully.",

            confirmButtonColor: "#6935f5"

        });

        editIndex = -1;

    }


    else {

        contacts.push(contact);

        Swal.fire({

            icon: "success",

            title: "Contact Added!",

            text: "The contact has been added successfully.",

            confirmButtonColor: "#6935f5"

        });

    }
    contactForm.reset();


    var modal =
        bootstrap.Modal.getInstance(contactModalElement);

    if (modal) {

        modal.hide();

    }

    displayContacts();

});



function displayContacts(list = contacts) {
    var oldCards =
        contactsContainer.querySelectorAll(".contact-card");

    oldCards.forEach(function (card) {

        card.remove();

    });

    if (list.length === 0) {

        emptyState.style.display = "block";

    }


    else {

        emptyState.style.display = "none";


        list.forEach(function (contact) {

            var realIndex =
                contacts.indexOf(contact);

            var card =
                document.createElement("div");
            card.className =
                "contact-card";

            card.innerHTML = `

                <div class="d-flex justify-content-between align-items-center">

                    <!-- Contact Information -->

                    <div class="d-flex align-items-center gap-3">

                        <div class="contact-avatar">
                            ${getInitials(contact.name)}
                        </div>
                        <div>
                            <h5 class="fw-bold mb-2">
                                ${contact.name}
                            </h5>
                            <div class="contact-info mb-1">
                                <i class="fa-solid fa-phone me-2"></i>
                                ${contact.phone}

                            </div>
                            <div class="contact-info">
                                <i class="fa-solid fa-envelope me-2"></i>
                                ${contact.email || "No email"}
                            </div>
                             <div class="contact-group">
                            ${contact.group || "Other"}
                        </div>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="d-flex gap-2">
                        <button class="btn btn-light" onclick="toggleFavorite(${realIndex})" title="Favorite">
                            <i class="fa-${contact.favorite ? "solid" : "regular"} fa-star text-warning"></i>
                        </button>
                        <button class="btn btn-light" onclick="editContact(${realIndex})" title="Edit">
                            <i class="fa-solid fa-pen text-primary"></i>
                        </button>
                        <button class="btn btn-light" onclick="deleteContact(${realIndex})" title="Delete">
                            <i class="fa-solid fa-trash text-danger"></i>
                        </button>
                    </div>
                </div>
            `;

            contactsContainer.appendChild(card);

        });

    }

    updateStatistics();

    displayFavorites();

    displayEmergency();

}

function updateStatistics() {
    totalCount.textContent =
        contacts.length;

    contactsNumber.textContent =
        contacts.length;

    var favorites =
        contacts.filter(function (contact) {

            return contact.favorite;

        });


    favoriteCount.textContent =
        favorites.length;
    var emergency =
        contacts.filter(function (contact) {

            return contact.emergency;

        });


    emergencyCount.textContent =
        emergency.length;

}


function displayFavorites() {

    var favorites =
        contacts.filter(function (contact) {

            return contact.favorite;

        });

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `

            <p class="text-secondary mb-0">
                No favorites yet
            </p>

        `;

        return;

    }
    favoritesContainer.innerHTML = "";

    favorites.forEach(function (contact) {

        favoritesContainer.innerHTML += `

            <div class="d-flex align-items-center gap-2 mb-3">

                    <div class="contact-avatar">
                        ${getInitials(contact.name)}
                    </div>                <div>
                    <div class="fw-semibold">
                        ${contact.name}
                    </div>
                    <small class="text-secondary">
                        ${contact.phone}
                    </small>
                </div>
            </div>
        `;

    });
}
function displayEmergency() {

    var emergency =
        contacts.filter(function (contact) {

            return contact.emergency;

        });
    if (emergency.length === 0) {

        emergencyContainer.innerHTML = `

            <p class="text-secondary mb-0">
                No emergency contacts
            </p>

        `;

        return;

    }
    emergencyContainer.innerHTML = "";
    emergency.forEach(function (contact) {

        emergencyContainer.innerHTML += `

            <div class="d-flex align-items-center gap-2 mb-3">

                <div class="contact-avatar">
                    ${getInitials(contact.name)}
                </div>
                <div>
                    <div class="fw-semibold">
                        ${contact.name}
                    </div>
                    <small class="text-danger">
                        ${contact.phone}
                    </small>
                </div>
            </div>
        `;
    });
}

function toggleFavorite(index) {

    contacts[index].favorite =
        !contacts[index].favorite;


    displayContacts();

}
function getInitials(name) {
    var words = name.trim().split(/\s+/);

    if (words.length === 1) {
        return words[0].charAt(0).toUpperCase();
    }

    var firstLetter = words[0].charAt(0).toUpperCase();
    var lastLetter = words[words.length - 1].charAt(0).toUpperCase();

    return firstLetter + lastLetter;
}

function editContact(index) {

    var contact =
        contacts[index];
    nameInput.value =
        contact.name;

    phoneInput.value =
        contact.phone;

    emailInput.value =
        contact.email;

    addressInput.value =
        contact.address;

    favoriteInput.checked =
        contact.favorite;

    emergencyInput.checked =
        contact.emergency;
    editIndex = index;
    var modalTitle =
        contactModalElement.querySelector(".modal-title");
    modalTitle.innerHTML = `
        <i class="fa-solid fa-pen text-purple me-2"></i>
        Edit Contact

    `;

    var submitButton =
        contactForm.querySelector('button[type="submit"]');
    submitButton.innerHTML = `
        <i class="fa-solid fa-check me-1"></i>
        Update Contact
    `;

    var modal =
        new bootstrap.Modal(contactModalElement);
    modal.show();

}

function deleteContact(index) {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to recover this contact!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (result.isConfirmed) {
            contacts.splice(index, 1);
            displayContacts();
            Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "The contact has been deleted.",
                confirmButtonColor: "#6935f5"

            });

        }

    });

}

searchInput.addEventListener("input", function () {

    var searchValue =
        searchInput.value.toLowerCase().trim();
    var filteredContacts =
        contacts.filter(function (contact) {
            return (
                contact.name
                    .toLowerCase()
                    .includes(searchValue)

                ||
                contact.phone
                    .includes(searchValue)
                ||
                contact.email
                    .toLowerCase()
                    .includes(searchValue)
            );
        });
    displayContacts(filteredContacts);
});

contactModalElement.addEventListener(
    "hidden.bs.modal",
    function () {
        contactForm.reset();
        editIndex = -1;
        var modalTitle =
            contactModalElement.querySelector(".modal-title");
        modalTitle.innerHTML = `
            <i class="fa-solid fa-user-plus text-purple me-2"></i>
            Add Contact
        `;
        var submitButton =
            contactForm.querySelector('button[type="submit"]');
        submitButton.innerHTML = `
            <i class="fa-solid fa-plus me-1"></i>
            Add Contact
        `;
    }
);

displayContacts();