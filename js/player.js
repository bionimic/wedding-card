var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

if ($("#videoId").val()) {
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player("youtube-player", {
            height: "390",
            width: "640",
            videoId: $("#videoId").val(),
            playerVars: { playsinline: 1 },
            playerVars: { loop: 1 },
            events: {
                onReady: onPlayerReady,
            },
        });
    }

    function onPlayerReady(event) {
        player.loadVideoById({
            videoId: $("#videoId").val(),
            startSeconds: $("#videoStart").val(),
        });
    }

    $("#start-btn").click(function () {
        $(".music-title").text(player.videoTitle);
        playMusic();
    });
}

function playMusic() {
    player.playVideo();
}

function pauseMusic() {
    player.pauseVideo();
}

if ($("#music-btn").length) {
    $("#music-btn").click(function () {
        if ($("#videoId").val()) {
            if (player.getPlayerState() != 1) {
                playMusic();
                $(".music-player").removeClass("paused");
            } else {
                pauseMusic();
                $(".music-player").addClass("paused");
            }
        } else {
            const audio = $("#audio").get(0);

            if (audio.paused) {
                audio.play();
                $(".music-player").removeClass("paused");
            } else {
                audio.pause();
                $(".music-player").addClass("paused");
            }
        }
    });
}
