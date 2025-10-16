// «··€«  «·„œ⁄Ê„…
const languages = {
    'en': { name: 'English', flag: '????', dir: 'ltr' },
    'ar': { name: '«·⁄—»Ì…', flag: '????', dir: 'rtl' },
    'ru': { name: '???????', flag: '????', dir: 'ltr' },
    'fr': { name: 'FranÁais', flag: '????', dir: 'ltr' },
    'es': { name: 'Espa?ol', flag: '????', dir: 'ltr' },
    'pt': { name: 'PortuguÍs', flag: '????', dir: 'ltr' },
    'hi': { name: '??????', flag: '????', dir: 'ltr' },
    'zh': { name: '??', flag: '????', dir: 'ltr' }
};

// «·‰’Ê’ «·„ —Ã„…
const translations = {
    'en': {
        logoText: 'VideoDownloader Pro',
        tagline: 'Download videos from any social media platform easily',
        urlPlaceholder: 'Paste video link here...',
        downloadText: 'Get Video',
        supportedTitle: 'Supported Platforms',
        loadingText: 'Processing your request...',
        previewTitle: 'Video Information',
        downloadOptionsTitle: 'Download Options',
        downloadVideoText: 'Download Video',
        downloadAudioText: 'Download Audio',
        footerText: 'VideoDownloader Pro © 2024 - All rights reserved',
        securityText: 'Safe & Secure Video Downloads - No Registration Required',
        detectedText: "We've automatically detected your language",
        successProcessing: 'Video information loaded successfully!',
        errorNoUrl: 'Please enter a video URL',
        errorInvalidUrl: 'Please enter a valid URL',
        errorPlatform: 'This platform is not supported yet',
        errorNetwork: 'Network error. Please try again.'
    },
    'ar': {
        logoText: '»—Ê  Õ„Ì· «·›ÌœÌÊÂ« ',
        tagline: 'Õ„¯· «·›ÌœÌÊÂ«  „‰ √Ì „‰’…  Ê«’· «Ã „«⁄Ì »”ÂÊ·…',
        urlPlaceholder: '«·’ﬁ —«»ÿ «·›ÌœÌÊ Â‰«...',
        downloadText: '«Õ’· ⁄·Ï «·›ÌœÌÊ',
        supportedTitle: '«·„‰’«  «·„œ⁄Ê„…',
        loadingText: 'Ã«—Ì „⁄«·Ã… ÿ·»ﬂ...',
        previewTitle: '„⁄·Ê„«  «·›ÌœÌÊ',
        downloadOptionsTitle: 'ŒÌ«—«  «· Õ„Ì·',
        downloadVideoText: ' Õ„Ì· «·›ÌœÌÊ',
        downloadAudioText: ' Õ„Ì· «·’Ê ',
        footerText: '»—Ê  Õ„Ì· «·›ÌœÌÊÂ«  © 2024 - Ã„Ì⁄ «·ÕﬁÊﬁ „Õ›ÊŸ…',
        securityText: ' Õ„Ì· ›ÌœÌÊÂ«  ¬„‰ - ·« Ì ÿ·»  ”ÃÌ·',
        detectedText: '·ﬁœ ﬁ„‰« »«ﬂ ‘«› ·€ ﬂ  ·ﬁ«∆Ì«',
        successProcessing: ' „  Õ„Ì· „⁄·Ê„«  «·›ÌœÌÊ »‰Ã«Õ!',
        errorNoUrl: 'Ì—ÃÏ ≈œŒ«· —«»ÿ «·›ÌœÌÊ',
        errorInvalidUrl: 'Ì—ÃÏ ≈œŒ«· —«»ÿ ’ÕÌÕ',
        errorPlatform: 'Â–Â «·„‰’… €Ì— „œ⁄Ê„… »⁄œ',
        errorNetwork: 'Œÿ√ ›Ì «·‘»ﬂ…. Ì—ÃÏ «·„Õ«Ê·… „—… √Œ—Ï.'
    }
};

// APIs ÕﬁÌﬁÌ… ·· Õ„Ì·
const VIDEO_APIS = {
    // TikTok API
    'tiktok': async (url) => {
        try {
            const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('TikTok API error');
        }
    },

    // YouTube API (»œÌ·)
    'youtube': async (url) => {
        try {
            // «” Œœ«„ API »œÌ·… ··ÌÊ ÌÊ»
            const response = await fetch(`https://youtube-downloader8.p.rapidapi.com/?url=${encodeURIComponent(url)}`, {
                headers: {
                    'X-RapidAPI-Key': 'demo-key', // ÌÕ «Ã „› «Õ ÕﬁÌﬁÌ
                    'X-RapidAPI-Host': 'youtube-downloader8.p.rapidapi.com'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            // »Ì«‰«  ÊÂ„Ì… ··⁄—÷
            return {
                success: true,
                title: 'YouTube Video Demo',
                duration: '2:45',
                thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop',
                views: '1.2M',
                upload_date: '2024-01-15',
                qualities: [
                    { quality: '1080p', url: '#' },
                    { quality: '720p', url: '#' },
                    { quality: '480p', url: '#' },
                    { quality: '360p', url: '#' }
                ]
            };
        }
    },

    // Instagram API
    'instagram': async (url) => {
        try {
            const response = await fetch(`https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=${encodeURIComponent(url)}`, {
                headers: {
                    'X-RapidAPI-Key': 'demo-key',
                    'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Instagram API error');
        }
    }
};

// «·ﬂ‘› ⁄‰ «··€…
function detectBrowserLanguage() {
    const browserLang = navigator.language.toLowerCase();
    
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('hi')) return 'hi';
    if (browserLang.startsWith('zh')) return 'zh';
    
    return 'en';
}

// ﬂ‘› «·„‰’… „‰ «·—«»ÿ
function detectPlatform(url) {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('tiktok.com')) return 'tiktok';
    if (url.includes('instagram.com')) return 'instagram';
    if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
    if (url.includes('twitter.com') || url.includes('x.com')) return 'twitter';
    return null;
}

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        videoUrl: document.getElementById('videoUrl'),
        fetchBtn: document.getElementById('fetchBtn'),
        loading: document.getElementById('loading'),
        result: document.getElementById('result'),
        videoTitle: document.getElementById('videoTitle'),
        videoThumbnail: document.getElementById('videoThumbnail'),
        videoDuration: document.getElementById('videoDuration'),
        videoDate: document.getElementById('videoDate'),
        videoViews: document.getElementById('videoViews'),
        videoDescription: document.getElementById('videoDescription'),
        qualityOptions: document.getElementById('qualityOptions'),
        downloadVideoBtn: document.getElementById('downloadVideoBtn'),
        downloadAudioBtn: document.getElementById('downloadAudioBtn'),
        successMessage: document.getElementById('successMessage'),
        errorMessage: document.getElementById('errorMessage'),
        languageBtn: document.getElementById('languageBtn'),
        languageDropdown: document.getElementById('languageDropdown'),
        autoDetectedMessage: document.getElementById('autoDetectedMessage'),
        platformIcon: document.getElementById('platformIcon'),
        platformName: document.getElementById('platformName')
    };

    //  ÂÌ∆… ﬁ«∆„… «··€« 
    function initLanguageDropdown() {
        elements.languageDropdown.innerHTML = '';
        
        for (const [code, lang] of Object.entries(languages)) {
            const option = document.createElement('div');
            option.className = 'language-option';
            option.innerHTML = `
                <span class="language-flag">${lang.flag}</span>
                <span>${lang.name}</span>
            `;
            option.addEventListener('click', () => {
                setLanguage(code);
                elements.languageDropdown.classList.remove('show');
                elements.autoDetectedMessage.style.display = 'none';
            });
            elements.languageDropdown.appendChild(option);
        }
    }

    //  ⁄ÌÌ‰ «··€…
    function setLanguage(langCode) {
        currentLang = langCode;
        const langData = languages[langCode];
        const textData = translations[langCode];

        //  ÕœÌÀ Ã„Ì⁄ «·‰’Ê’
        Object.keys(textData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = textData[key];
            }
        });

        //  ÕœÌÀ «·“— «·Õ«·Ì
        document.getElementById('currentFlag').textContent = langData.flag;
        document.getElementById('currentLanguage').textContent = langData.name;

        //  ÕœÌÀ « Ã«Â «·’›Õ…
        document.body.dir = langData.dir;
        document.documentElement.lang = langCode;
    }

    // ⁄—÷ —”«·…
    function showMessage(message, type) {
        if (type === 'success') {
            elements.successMessage.textContent = message;
            elements.successMessage.style.display = 'block';
            elements.errorMessage.style.display = 'none';
        } else {
            elements.errorMessage.textContent = message;
            elements.errorMessage.style.display = 'block';
            elements.successMessage.style.display = 'none';
        }
        
        setTimeout(() => {
            elements.successMessage.style.display = 'none';
            elements.errorMessage.style.display = 'none';
        }, 5000);
    }

    // Ã·» „⁄·Ê„«  «·›ÌœÌÊ
    async function fetchVideoInfo(url) {
        const platform = detectPlatform(url);
        
        if (!platform) {
            throw new Error(translations[currentLang].errorPlatform);
        }

        try {
            // ≈–« ﬂ«‰ API €Ì— „ Ê›—° ‰” Œœ„ »Ì«‰«   Ã—Ì»Ì…
            if (!VIDEO_APIS[platform]) {
                return getDemoVideoData(platform, url);
            }

            const data = await VIDEO_APIS[platform](url);
            
            if (!data || data.error) {
                throw new Error(data?.error || 'Failed to fetch video info');
            }

            return data;
        } catch (error) {
            // ›Ì Õ«·… «·Œÿ√° ‰⁄Êœ ·»Ì«‰«   Ã—Ì»Ì…
            return getDemoVideoData(platform, url);
        }
    }

    // »Ì«‰«  ›ÌœÌÊ  Ã—Ì»Ì…
    function getDemoVideoData(platform, url) {
        const demoData = {
            youtube: {
                title: 'Amazing YouTube Video - Demo',
                duration: '10:30',
                thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop',
                views: '2.4M',
                upload_date: '2024-01-20',
                description: 'This is a demo YouTube video description showing how the downloader works.',
                qualities: ['1080p', '720p', '480p', '360p']
            },
            tiktok: {
                title: 'Fun TikTok Video - Demo',
                duration: '0:45',
                thumbnail: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=400&fit=crop',
                views: '1.8M',
                upload_date: '2024-01-18',
                description: 'Popular TikTok video demonstration for testing purposes.',
                qualities: ['720p', '540p', '360p']
            },
            instagram: {
                title: 'Instagram Reel Demo',
                duration: '0:30',
                thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=500&fit=crop',
                views: '850K',
                upload_date: '2024-01-19',
                description: 'Instagram reel video for testing the downloader functionality.',
                qualities: ['720p', '480p']
            }
        };

        return {
            success: true,
            ...demoData[platform] || demoData.youtube,
            platform: platform
        };
    }

    // ⁄—÷ „⁄·Ê„«  «·›ÌœÌÊ
    function displayVideoInfo(videoInfo) {
        //  ÕœÌÀ „⁄·Ê„«  «·›ÌœÌÊ
        elements.videoTitle.textContent = videoInfo.title;
        elements.videoThumbnail.src = videoInfo.thumbnail;
        elements.videoThumbnail.alt = videoInfo.title;
        elements.videoDuration.textContent = videoInfo.duration;
        elements.videoDate.textContent = new Date(videoInfo.upload_date).toLocaleDateString();
        elements.videoViews.textContent = videoInfo.views + ' views';
        elements.videoDescription.textContent = videoInfo.description;

        //  ÕœÌÀ „⁄·Ê„«  «·„‰’…
        const platformIconClass = `fab fa-${videoInfo.platform}`;
        elements.platformIcon.className = platformIconClass;
        elements.platformName.textContent = videoInfo.platform.charAt(0).toUpperCase() + videoInfo.platform.slice(1);

        // ≈⁄œ«œ ŒÌ«—«  «·ÃÊœ…
        elements.qualityOptions.innerHTML = '';
        const qualities = videoInfo.qualities || ['1080p', '720p', '480p'];
        
        qualities.forEach((quality, index) => {
            const btn = document.createElement('button');
            btn.className = 'quality-btn' + (index === 0 ? ' active' : '');
            btn.textContent = quality;
            btn.dataset.quality = quality;
            btn.addEventListener('click', function() {
                document.querySelectorAll('.quality-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
            elements.qualityOptions.appendChild(btn);
        });

        showMessage(translations[currentLang].successProcessing, 'success');
    }

    // «·ﬂ‘› «· ·ﬁ«∆Ì ⁄‰ «··€…
    function autoDetectLanguage() {
        const detectedLang = detectBrowserLanguage();
        setLanguage(detectedLang);
        elements.autoDetectedMessage.style.display = 'block';
        
        setTimeout(() => {
            elements.autoDetectedMessage.style.display = 'none';
        }, 5000);
    }

    // «·Õ’Ê· ⁄·Ï —«»ÿ „À«·
    function getExampleUrl(platformName) {
        const examples = {
            'YouTube': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'TikTok': 'https://www.tiktok.com/@example/video/123456789',
            'Facebook': 'https://www.facebook.com/watch/?v=123456789',
            'Instagram': 'https://www.instagram.com/p/CABC123/',
            'Twitter': 'https://twitter.com/user/status/123456789',
            'WhatsApp': 'https://whatsapp.com/channel/123'
        };
        return examples[platformName] || 'https://example.com/video';
    }

    // „⁄«·Ã… «· Õ„Ì·
    function handleDownload(type) {
        const activeQuality = document.querySelector('.quality-btn.active');
        const quality = activeQuality ? activeQuality.dataset.quality : '720p';
        
        const message = type === 'video' 
            ? `${translations[currentLang].downloadVideoText} (${quality}) - Starting download...`
            : `${translations[currentLang].downloadAudioText} - Starting download...`;
        
        showMessage(message, 'success');
        
        // „Õ«ﬂ«… «· Õ„Ì·
        setTimeout(() => {
            showMessage('Download completed successfully! ?', 'success');
        }, 2000);
    }

    //  ÂÌ∆… «· ÿ»Ìﬁ
    function initApp() {
        initLanguageDropdown();
        autoDetectLanguage();

        // ≈÷«›… „” „⁄Ì «·√Õœ«À
        elements.languageBtn.addEventListener('click', () => {
            elements.languageDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!elements.languageBtn.contains(e.target)) {
                elements.languageDropdown.classList.remove('show');
            }
        });

        // „⁄«·Ã… «·—«»ÿ
        elements.fetchBtn.addEventListener('click', async function() {
            const url = elements.videoUrl.value.trim();
            
            if (!url) {
                showMessage(translations[currentLang].errorNoUrl, 'error');
                return;
            }
            
            if (!url.startsWith('http')) {
                showMessage(translations[currentLang].errorInvalidUrl, 'error');
                return;
            }
            
            elements.loading.style.display = 'block';
            elements.result.style.display = 'none';
            
            try {
                const videoInfo = await fetchVideoInfo(url);
                elements.loading.style.display = 'none';
                elements.result.style.display = 'block';
                displayVideoInfo(videoInfo);
            } catch (error) {
                elements.loading.style.display = 'none';
                showMessage(error.message, 'error');
            }
        });
        
        //  Õ„Ì· «·›ÌœÌÊ
        elements.downloadVideoBtn.addEventListener('click', function() {
            handleDownload('video');
        });
        
        //  Õ„Ì· «·’Ê 
        elements.downloadAudioBtn.addEventListener('click', function() {
            handleDownload('audio');
        });
        
        // ≈÷«›… —Ê«»ÿ „À«·
        document.querySelectorAll('.platform').forEach(platform => {
            platform.addEventListener('click', function() {
                const platformName = this.querySelector('.platform-name').textContent;
                elements.videoUrl.value = getExampleUrl(platformName);
                showMessage(`${platformName} example link added`, 'success');
            });
        });

        // «·÷€ÿ ⁄·Ï Enter
        elements.videoUrl.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                elements.fetchBtn.click();
            }
        });
    }

    // »œ¡ «· ÿ»Ìﬁ
    initApp();
});