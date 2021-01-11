let bytesAmount = 0

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    )
}

const updateStatus = (size) => {
    const text = `Pending bytes to upload: <stront>${size}</strong>`
    document.getElementById('size').innerHTML = text
}

const showSize = () => {
    const { files: fileElements } = document.getElementById('file')
    if(!fileElements.length) return;

    const files = Array.from(fileElements)
    const { size } = files.reduce((prev, next) => ({ size: prev.size + next.size }), { size: 0 })    

    bytesAmount = size
    updateStatus(formatBytes(size))
}

const onload = () => {
    console.log('App is loaded')
}

window.onload = onload
window.showSize = showSize