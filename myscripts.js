const icons = [
            'fa-glass', 'fa-music', 'fa-search', 'fa-envelope-o', 'fa-heart', 'fa-star', 'fa-star-o', 
            'fa-user', 'fa-film', 'fa-th-large', 'fa-th', 'fa-th-list', 'fa-check', 'fa-remove', 'fa-close', 
            'fa-times', 'fa-search-plus', 'fa-search-minus', 'fa-power-off', 'fa-signal', 'fa-cog', 'fa-trash-o', 
            'fa-home', 'fa-file-o', 'fa-clock-o', 'fa-road', 'fa-download', 'fa-arrow-circle-o-down', 
            'fa-arrow-circle-o-up', 'fa-inbox', 'fa-play-circle-o', 'fa-repeat', 'fa-refresh', 'fa-list-alt', 
            'fa-lock', 'fa-flag', 'fa-headphones', 'fa-volume-off', 'fa-volume-down', 'fa-volume-up', 'fa-qrcode', 
            'fa-barcode', 'fa-tag', 'fa-tags', 'fa-book', 'fa-bookmark', 'fa-print', 'fa-camera', 'fa-font', 
            'fa-bold', 'fa-italic', 'fa-text-height', 'fa-text-width', 'fa-align-left', 'fa-align-center', 
            'fa-align-right', 'fa-align-justify', 'fa-list', 'fa-outdent', 'fa-indent', 'fa-video-camera', 
            'fa-picture-o', 'fa-pencil', 'fa-map-marker', 'fa-adjust', 'fa-tint', 'fa-edit', 'fa-share-square-o', 
            'fa-check-square-o', 'fa-arrows', 'fa-step-backward', 'fa-fast-backward', 'fa-backward', 'fa-play', 
            'fa-pause', 'fa-stop', 'fa-forward', 'fa-fast-forward', 'fa-step-forward', 'fa-eject', 'fa-chevron-left', 
            'fa-chevron-right', 'fa-plus-circle', 'fa-minus-circle', 'fa-times-circle', 'fa-check-circle', 
            'fa-question-circle', 'fa-info-circle', 'fa-crosshairs', 'fa-times-circle-o', 'fa-check-circle-o', 
            'fa-ban', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrow-down', 'fa-share', 
            'fa-expand', 'fa-compress', 'fa-plus', 'fa-minus', 'fa-asterisk', 'fa-exclamation-circle', 
            'fa-gift', 'fa-leaf', 'fa-fire', 'fa-eye', 'fa-eye-slash', 'fa-exclamation-triangle', 'fa-plane', 
            'fa-calendar', 'fa-random', 'fa-comment', 'fa-magnet', 'fa-chevron-up', 'fa-chevron-down', 
            'fa-retweet', 'fa-shopping-cart', 'fa-folder', 'fa-folder-open', 'fa-arrows-v', 'fa-arrows-h', 
            'fa-bar-chart-o', 'fa-twitter-square', 'fa-facebook-square', 'fa-camera-retro', 'fa-key', 
            'fa-cogs', 'fa-comments', 'fa-thumbs-o-up', 'fa-thumbs-o-down', 'fa-star-half', 'fa-heart-o', 
            'fa-sign-out', 'fa-linkedin-square', 'fa-thumb-tack', 'fa-external-link', 'fa-sign-in', 'fa-trophy', 
            'fa-github-square', 'fa-upload', 'fa-lemon-o', 'fa-phone', 'fa-square-o', 'fa-bookmark-o', 'fa-phone-square', 
            'fa-twitter', 'fa-facebook', 'fa-github', 'fa-unlock', 'fa-credit-card', 'fa-rss', 'fa-hdd-o', 'fa-bullhorn', 
            'fa-bell', 'fa-certificate', 'fa-hand-o-right', 'fa-hand-o-left', 'fa-hand-o-up', 'fa-hand-o-down', 
            'fa-arrow-circle-left', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-circle-down', 
            'fa-globe', 'fa-wrench', 'fa-tasks', 'fa-filter', 'fa-briefcase', 'fa-arrows-alt', 'fa-users', 
            'fa-link', 'fa-cloud', 'fa-flask', 'fa-scissors', 'fa-files-o', 'fa-paperclip', 'fa-floppy-o', 
            'fa-square', 'fa-bars', 'fa-list-ul', 'fa-list-ol', 'fa-strikethrough', 'fa-underline', 'fa-table', 
            'fa-magic', 'fa-truck', 'fa-pinterest', 'fa-pinterest-square', 'fa-google-plus-square', 
            'fa-google-plus', 'fa-money', 'fa-caret-down', 'fa-caret-up', 'fa-caret-left', 'fa-caret-right', 
            'fa-columns', 'fa-sort', 'fa-sort-asc', 'fa-sort-desc', 'fa-envelope', 'fa-linkedin', 'fa-undo', 
            'fa-gavel', 'fa-tachometer', 'fa-comment-o', 'fa-comments-o', 'fa-bolt', 'fa-sitemap', 'fa-umbrella', 
            'fa-clipboard', 'fa-lightbulb-o', 'fa-exchange', 'fa-cloud-download', 'fa-cloud-upload', 
            'fa-user-md', 'fa-stethoscope', 'fa-suitcase', 'fa-bell-o', 'fa-coffee', 'fa-cutlery', 'fa-file-text-o', 
            'fa-building-o', 'fa-hospital-o', 'fa-ambulance', 'fa-medkit', 'fa-fighter-jet', 'fa-beer', 
            'fa-h-square', 'fa-plus-square', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 
            'fa-angle-double-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-angle-down', 
            'fa-desktop', 'fa-laptop', 'fa-tablet', 'fa-mobile', 'fa-circle-o', 'fa-quote-left', 'fa-quote-right', 
            'fa-spinner', 'fa-circle', 'fa-reply', 'fa-github-alt', 'fa-folder-o', 'fa-folder-open-o', 'fa-smile-o', 
            'fa-frown-o', 'fa-meh-o', 'fa-gamepad', 'fa-keyboard-o', 'fa-flag-o', 'fa-flag-checkered', 
            'fa-terminal', 'fa-code', 'fa-reply-all', 'fa-mail-reply-all', 'fa-star-half-o', 'fa-location-arrow', 
            'fa-crop', 'fa-code-fork', 'fa-chain-broken', 'fa-question', 'fa-info', 'fa-exclamation', 
            'fa-superscript', 'fa-subscript', 'fa-eraser', 'fa-puzzle-piece', 'fa-microphone', 'fa-microphone-slash', 
            'fa-shield', 'fa-calendar-o', 'fa-fire-extinguisher', 'fa-rocket', 'fa-maxcdn', 'fa-chevron-circle-left', 
            'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-circle-down', 'fa-html5', 'fa-css3', 
            'fa-anchor', 'fa-unlock-alt', 'fa-bullseye', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-rss-square', 
            'fa-play-circle', 'fa-ticket', 'fa-minus-square', 'fa-minus-square-o', 'fa-level-up', 'fa-level-down', 
            'fa-check-square', 'fa-pencil-square', 'fa-external-link-square', 'fa-share-square', 'fa-compass', 
            'fa-caret-square-o-down', 'fa-caret-square-o-up', 'fa-caret-square-o-right', 'fa-eur', 'fa-gbp', 'fa-usd', 
            'fa-inr', 'fa-jpy', 'fa-rub', 'fa-krw', 'fa-btc', 'fa-file', 'fa-file-text', 'fa-sort-alpha-asc', 
            'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-numeric-asc', 
            'fa-sort-numeric-desc', 'fa-thumbs-up', 'fa-thumbs-down', 'fa-youtube-square', 'fa-youtube', 
            'fa-xing', 'fa-xing-square', 'fa-youtube-play', 'fa-dropbox', 'fa-stack-overflow', 'fa-instagram', 
            'fa-flickr', 'fa-adn', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-tumblr', 'fa-tumblr-square', 
            'fa-long-arrow-down', 'fa-long-arrow-up', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-apple', 
            'fa-windows', 'fa-android', 'fa-linux', 'fa-dribbble', 'fa-skype', 'fa-foursquare', 'fa-trello', 
            'fa-female', 'fa-male', 'fa-gittip', 'fa-sun-o', 'fa-moon-o', 'fa-archive', 'fa-bug', 'fa-vk', 
            'fa-weibo', 'fa-renren', 'fa-pagelines', 'fa-stack-exchange', 'fa-arrow-circle-o-right', 
            'fa-arrow-circle-o-left', 'fa-caret-square-o-left', 'fa-dot-circle-o', 'fa-wheelchair', 'fa-vimeo-square', 
            'fa-try', 'fa-plus-square-o'
        
    ];

   // Function to display icons based on search
function displayIcons(filter = "") {
    const iconContainer = document.getElementById("iconContainer");
    iconContainer.innerHTML = ""; // Clear existing icons

    icons.forEach(icon => {
        if (icon.includes(filter)) {
            const iconBox = document.createElement("div");
            iconBox.className = "icon-box";
            
            iconBox.innerHTML = `
                <i class="fa ${icon} icon"></i>
                <div class="icon-name">${icon.replace('fa-', '').replace('-', ' ')}</div>
                <button class="copy-button" onclick="copyCode('<i class=&quot;fa ${icon}&quot;></i>')">Copy</button>
            `;
            
            iconContainer.appendChild(iconBox);
        }
    });
}

// Copy to clipboard function
function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied: " + code);
    });
}

// Event listener for the search input
document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    displayIcons(searchValue);
});

// Initial display of all icons
displayIcons();
