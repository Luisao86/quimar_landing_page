async function includeFragment(selector, url) {
    const target = document.querySelector(selector);
    if (!target) return;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`No se pudo cargar ${url}`);
        target.innerHTML = await res.text();
    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await includeFragment('[data-include="header"]', "/components/header.html");
    await includeFragment('[data-include="footer"]', "/components/footer.html");
});