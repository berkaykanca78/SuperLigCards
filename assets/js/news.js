// News Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Apply filter
            applyNewsFilter(category);
        });
    });

    // Category link functionality
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            // Update filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-category="${category}"]`).classList.add('active');
            
            // Apply filter
            applyNewsFilter(category);
        });
    });

    // Pagination functionality
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadNews();
        }
    });

    nextPage.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadNews();
        }
    });

    // Initialize page
    loadNews();
});

let currentPage = 1;
const newsPerPage = 6;
let totalPages = 1;
let currentFilter = 'all';

// Sample news data
const allNews = [
    {
        id: 1,
        title: 'Galatasaray\'dan Büyük Transfer: Yıldız Oyuncu İmzayı Attı',
        excerpt: 'Galatasaray, sezon sonu için büyük bir transfer hamlesi gerçekleştirdi. Dünya yıldızı oyuncu ile anlaşma sağlandı...',
        category: 'transfers',
        date: '2025-03-15',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Transfer+Haber',
        featured: true
    },
    {
        id: 2,
        title: 'Fenerbahçe\'den Sürpriz Transfer',
        excerpt: 'Fenerbahçe, beklenmedik bir transfer hamlesi gerçekleştirdi. Genç yetenek ile anlaşma sağlandı...',
        category: 'transfers',
        date: '2025-03-14',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Transfer+Haber'
    },
    {
        id: 3,
        title: 'Beşiktaş Teknik Direktörü Açıkladı',
        excerpt: 'Beşiktaş teknik direktörü, sezon hedeflerini ve transfer planlarını açıkladı...',
        category: 'general',
        date: '2025-03-13',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Genel+Haber'
    },
    {
        id: 4,
        title: 'Trabzonspor\'da Sakatlık Şoku',
        excerpt: 'Trabzonspor\'un yıldız oyuncusu sakatlandı. Takım için büyük darbe...',
        category: 'injuries',
        date: '2025-03-12',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Sakatlık+Haber'
    },
    {
        id: 5,
        title: 'Galatasaray - Fenerbahçe Maç Analizi',
        excerpt: 'Büyük derbi maçının detaylı analizi ve teknik değerlendirmesi...',
        category: 'matches',
        date: '2025-03-11',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Maç+Analizi'
    },
    {
        id: 6,
        title: 'Süper Lig\'de Gol Krallığı Yarışı',
        excerpt: 'Sezon sonuna yaklaşırken gol krallığı yarışında son durum...',
        category: 'general',
        date: '2025-03-10',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Genel+Haber'
    },
    {
        id: 7,
        title: 'Adana Demirspor\'dan Transfer Hamlesi',
        excerpt: 'Adana Demirspor, sezon sonu için önemli bir transfer gerçekleştirdi...',
        category: 'transfers',
        date: '2025-03-09',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Transfer+Haber'
    },
    {
        id: 8,
        title: 'Antalyaspor\'da Teknik Direktör Değişikliği',
        excerpt: 'Antalyaspor\'da teknik direktör değişikliği gerçekleşti...',
        category: 'general',
        date: '2025-03-08',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Genel+Haber'
    },
    {
        id: 9,
        title: 'Beşiktaş - Trabzonspor Maç Öncesi',
        excerpt: 'Beşiktaş - Trabzonspor maçı öncesi takımların durumu ve tahminler...',
        category: 'matches',
        date: '2025-03-07',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Maç+Haber'
    },
    {
        id: 10,
        title: 'Konyaspor\'da Sakatlık Haberi',
        excerpt: 'Konyaspor\'un önemli oyuncusu sakatlandı...',
        category: 'injuries',
        date: '2025-03-06',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Sakatlık+Haber'
    },
    {
        id: 11,
        title: 'Sivasspor\'dan Transfer Açıklaması',
        excerpt: 'Sivasspor yönetimi transfer planları hakkında açıklama yaptı...',
        category: 'transfers',
        date: '2025-03-05',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Transfer+Haber'
    },
    {
        id: 12,
        title: 'Kasımpaşa - Gaziantep FK Maç Sonucu',
        excerpt: 'Kasımpaşa - Gaziantep FK maçının detaylı analizi...',
        category: 'matches',
        date: '2025-03-04',
        image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Maç+Haber'
    }
];

// Load news
function loadNews() {
    // Apply filter
    let filteredNews = applyNewsFilter(currentFilter);
    
    // Calculate pagination
    totalPages = Math.ceil(filteredNews.length / newsPerPage);
    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const pageNews = filteredNews.slice(startIndex, endIndex);
    
    // Update news display
    updateNewsDisplay(pageNews);
    updatePagination();
}

// Apply news filter
function applyNewsFilter(category) {
    currentFilter = category;
    currentPage = 1; // Reset to first page when filtering
    
    let filteredNews = allNews;
    
    if (category !== 'all') {
        filteredNews = allNews.filter(news => news.category === category);
    }
    
    // Calculate pagination
    totalPages = Math.ceil(filteredNews.length / newsPerPage);
    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const pageNews = filteredNews.slice(startIndex, endIndex);
    
    // Update news display
    updateNewsDisplay(pageNews);
    updatePagination();
    
    return filteredNews;
}

// Update news display
function updateNewsDisplay(news) {
    const newsGrid = document.getElementById('newsGrid');
    
    // Clear existing content
    newsGrid.innerHTML = '';
    
    if (news.length === 0) {
        newsGrid.innerHTML = `
            <div style="text-align: center; color: #cccccc; padding: 40px; grid-column: 1 / -1;">
                <i class="fas fa-newspaper" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>Haber bulunamadı</h3>
                <p>Seçilen kategoriye uygun haber bulunamadı.</p>
            </div>
        `;
        return;
    }
    
    news.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.className = 'news-article';
        newsArticle.style.position = 'relative';
        
        const categoryLabels = {
            'transfers': 'Transferler',
            'matches': 'Maç Analizleri',
            'injuries': 'Sakatlıklar',
            'general': 'Genel Haberler'
        };
        
        newsArticle.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="category ${article.category}">${categoryLabels[article.category]}</span>
                    <span class="date">${formatDate(article.date)}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a href="#" class="read-more">Devamını Oku <i class="fas fa-arrow-right"></i></a>
            </div>
            <button class="info-button" onclick="window.location.href='news-detail.html?id=${article.id}&category=${article.category}'" title="Haber Detayları">
                <i class="fas fa-info"></i>
            </button>
        `;
        
        newsGrid.appendChild(newsArticle);
    });
}

// Update pagination
function updatePagination() {
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');
    
    // Update button states
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages;
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            loadNews();
        });
        pageNumbers.appendChild(pageNumber);
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('tr-TR', options);
} 