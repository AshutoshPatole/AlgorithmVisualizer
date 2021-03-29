let isMobile = window.orientation > -1;
if (isMobile) {
    tata.error("Unresponsive", "Please use desktop for better experience. We are still working on mobile responsiveness.", {
        position: 'tm',
        animate: 'slide',
        holding: true
    });
}
else {
    console.log("Desktop");
}