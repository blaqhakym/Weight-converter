document.getElementById('input').addEventListener('input', function (e) {
    let lbs = e.target.value
    document.getElementById('gramsOutput').innerHTML = (lbs / 0.00220462).toFixed(3)
    
    document.getElementById('kiloOutput').innerHTML = (lbs / 2.20462).toFixed(3)

    document.getElementById('ozOutput').innerHTML = (lbs * 16)
})