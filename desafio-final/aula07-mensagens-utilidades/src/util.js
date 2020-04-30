class Util {
    // transforma o timeout em promisse
    static timeout(tempo) {
        return new Promise(resolve => 
            setTimeout(resolve, tempo)
        )
    }
}