const API_KEY = "uBmqUGe_vPiaQ0IQTpbgkXSGRoQ"
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e))
document.getElementById("submit").addEventListener("click", e => postForm(e))

async function postForm(e){
    const form = new FormData(document.getElementById('checksform'))

    const response = await fetch(API_URL, {
                                method: "POST",
                                headers: {
                                        "Authorization": API_KEY,
        },
        body: form,
    })
}

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`

    const response = await fetch(queryString)

    const data = await response.json()

    if (response.ok) {
        displayStatus(data)
    } else {
        console.log('ERROR!!')
        throw new ErrorEvent(data.error)

    }
}

function displayStatus(data){
    document.getElementById('resultsModalTitle').textContent=('API Key Status')
    document.getElementById('results-content').textContent=(`The key valid untill: ${data.expiry}`)
    resultsModal.show()
}
