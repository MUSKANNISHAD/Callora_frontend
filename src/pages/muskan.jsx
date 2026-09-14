<div className={styles.lobbyContainer}>
    <div className={styles.lobbyCard}>
        <div className={styles.header}>
            <div className={styles.logo}>Callora</div>

            <div className={styles.status}>
                <span className={styles.statusDot}></span>
                Ready to connect
            </div>
        </div>
     
        <div className={styles.content}>
            <div className={styles.titleSection}>
                <h1>Ready to connect?</h1>
                <p>
                    Enter your username and join the Callora lobby.
                </p>
            </div>
            <div className={styles.videoContainer}>

                <video
                    ref={localVideoref}
                    autoPlay
                    muted
                    playsInline
                    className={styles.video}
                />

                <div className={styles.videoOverlay}>
                    <span className={styles.cameraIcon}>●</span>
                    Camera preview
                </div>

            </div>
            <div className={styles.inputSection}>

                <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    variant="outlined"
                    className={styles.usernameInput}
                />

                <Button
                    variant="contained"
                    onClick={connect}
                    className={styles.connectButton}
                >
                    Join Lobby
                    <span className={styles.arrow}>→</span>
                </Button>

            </div>

        </div>
        <div className={styles.footer}>
            🔒 Your connection is private and secure
        </div>

    </div>

</div>