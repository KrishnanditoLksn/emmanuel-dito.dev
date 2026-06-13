export function resumeDownloader() {
    const pdfUrl = "emmmanuel_dito_cv-5.pdf"
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = "emmanuel_resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}