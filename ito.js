addEventListener("load", () => {
    /**
     * 基本は読み込みが終了すれば、
     * loading画面は必要ないと言っても過言ではないため、
     * loadがトリガーされたら即座に表示を消す
     * 
     * もしも時間差が必要な場合は、setTimeout({}, 2000);を追加するといい
     */
    const spined = document.getElementsByClassName("spined")[0]
    spined.classList.remove("spined")
})
