// Sahifa yuklanganda elementlarni chiqarish (Reveal)
        window.onload = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => el.classList.add('active'));
        };

        // Kartochkani kengaytirish funksiyasi
        function expandCard(selectedCard) {
            const allCards = document.querySelectorAll('.service-card');
            
            // Agar bosilgani active bo'lsa - yopamiz, bo'lmasa - ochamiz
            const isAlreadyActive = selectedCard.classList.contains('active');

            // Barcha qatorlardagi active klasslarni tozalash
            allCards.forEach(card => card.classList.remove('active'));

            if (!isAlreadyActive) {
                selectedCard.classList.add('active');
                // Kengayganda ma'lumot ko'rinishi uchun silliq scroll
                setTimeout(() => {
                    selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }
