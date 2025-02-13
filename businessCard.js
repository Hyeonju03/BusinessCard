document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("theme");
    const card = document.getElementById("card");
    const inputs = document.querySelectorAll("input");
    const saveBtn = document.getElementById("saveBtn");

    // 입력값을 실시간 반영
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            document.getElementById("preview" + input.id.charAt(0).toUpperCase() + input.id.slice(1)).textContent = input.value || input.placeholder;
        });
    });

    // 테마 변경
    themeSelect.addEventListener("change", () => {
        if (themeSelect.value === "dark") {
            card.className = "w-[400px] h-[220px] p-4 rounded-lg shadow-lg bg-gray-800 text-white relative";
            document.getElementById("previewAbout").className = "text-xs text-gray-300"; // Dark mode
        } else {
            card.className = "w-[400px] h-[220px] p-4 rounded-lg shadow-lg bg-gray-100 text-black relative";
            document.getElementById("previewAbout").className = "text-xs text-gray-700"; // Light mode (더 어두운 글씨)
        }
    });

    // 이미지 저장 기능
    saveBtn.addEventListener("click", () => {
        html2canvas(card).then(canvas => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "business_card.png";
            link.click();
        });
    });
});