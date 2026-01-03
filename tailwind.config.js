// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 12px rgba(239,68,68,0.6), 0 0 24px rgba(239,68,68,0.4)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(239,68,68,0.9), 0 0 40px rgba(239,68,68,0.6)",
          },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
};


<div data-bg="/wp-content/themes/Moneta/images/contact-us-banner-bg.webp?v=1" class="banner page-banner clspeed-lazyload entered cllazyloaded" style="background-image: url(&quot;/wp-content/themes/Moneta/images/contact-us-banner-bg.webp?v=1&quot;); margin-top: 81px;" data-ll-status="loaded">
        <div class="inner">
            <h1>Contact Us</h1>
            <p>Get in contact with Moneta Markets</p>
                                </div>
    </div>