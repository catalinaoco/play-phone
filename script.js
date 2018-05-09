var isOn = false;

		var nums = [];
		for (let i = 0; i < 37; i++) {
			nums.push(new Audio());
		}
		nums[0].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2Fphone%20dialing%20-%20sound%20effect%20(1).mp3?1524616548941";
		nums[1].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FWoman%20Hello%20Sound%20Effect.mp3?1524616180842";
		nums[2].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FPhone%20ring%20and%20pull%20up.mp3?1524616301750";
		nums[3].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FPhone%20Call%20SOUND%20Effect.mp3?1524617015903";
		nums[4].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FPhone%20Disconnect%20Tones%20and%20Message.mp3?1524616755709";
		nums[5].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FDial%20tone%20with%20a%20answering%20machine%20beep.mp3?1524617323156";
    nums[6].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2Fphone%20dialing%20-%20sound%20effect%20(1).mp3?1524616548941";
		nums[9].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FWoman%20Hello%20Sound%20Effect.mp3?1524616180842";
		nums[10].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FPhone%20ring%20and%20pull%20up.mp3?1524616301750";
		nums[7].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FPhone%20Call%20SOUND%20Effect.mp3?1524617015903";
		nums[11].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FPhone%20Disconnect%20Tones%20and%20Message.mp3?1524616755709";
		nums[8].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FDial%20tone%20with%20a%20answering%20machine%20beep.mp3?1524617323156";
		nums[12].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FOKURRR__01.mp3?1525202021172";
		nums[13].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FButterfly%20in%20the%20sky.mp3?1525193820234";
		nums[14].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FHug%20me%20Brotha.mp3?1525201872286";
		nums[15].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FGoldfish%20The%20Snack%20that%20Smiles%20Back%20(Original).mp3?1525193795828";
		nums[16].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FSOMEBODY%20toucha%20my%20spaghett.mp3?1525193804635";
		nums[17].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FJoey%20-%20Hey%20How%20You%20Doin.mp3?1525202735391";
		nums[18].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FI%20dont%20really%20wanna%20do%20the%20work%20today%201.mp3?1525202203851";
		nums[19].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FLaw%20%20Order%20Sound%20Effect.mp3?1525193813920";
		nums[20].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FSwiper%20no%20swiping.mp3?1525202283451";
		nums[21].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FFamily%20Feud%20Vine.mp3?1525202545145";
		nums[22].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FWalmart%20yodel%20remix%20starts%20playing%20at%20the%20club.mp3?1525202643330";
		nums[23].src = "https://cdn.glitch.com/acc879e6-be0f-4e06-9774-e390d8124a50%2FLIT%20bill%20nye%20--%20vine.mp3?1525202363957";
    nums[29].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F7.mp3?1525394172636";
    nums[25].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F2%201.mp3?1525394173665";
    nums[26].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F12.mp3?1525394173360";
    nums[27].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F8.mp3?1525394172794";
    nums[28].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F4.mp3?1525394171890";
    nums[24].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F9.mp3?1525394172949";
    nums[30].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F3.mp3?1525394172043";
    nums[31].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F1.mp3?1525394173821";
    nums[32].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F5.mp3?1525394172294";
    nums[33].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F11.mp3?1525394173498";
    nums[34].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F6.mp3?1525394172491";
    nums[35].src = "https://cdn.glitch.com/55afca4d-146c-4245-9458-076248194758%2F10.mp3?1525394173119";

    

	function playNum(num) {
			if (isOn) {
        
        nums[num].currentTime = 0;
				nums[num].play();
			}
		}

$("#switch").click(function () {
	if (isOn == false) {
		$("#box").css("background-color", "#d2e9ff");
		$("#switch").html("Off");
		isOn = true;
	} else {
		$("#box").css("background-color", "grey");
		$("#switch").html("On");
		isOn = false;
	}

});
