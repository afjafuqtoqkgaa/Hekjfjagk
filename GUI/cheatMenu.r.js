let cheatMenuCode = `
<div class="WAKHack" id="WAKHack_window">

	<style>
        .WAKHack {
            left: 2%;
            top: 14%;
            position: fixed;
            z-index: 1000;
            display: flex;
        }

        .WAKHack__content {
            padding: 20px;
            background: #330024;
            box-shadow: 0 5px 15px black;
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            font-size: 0.9375rem;
            font-weight: 600;
            border-radius: 20px;
        }
	</style>

	<div class="WAKHack__content">
		<center>WAKHack</center><hr>

		<div id="gameStates" style="display: none;">
			<p>AirBreak: <font id="airBreakStateColor" color="red"><label id="airBreakState">FALSE</label></font></p>
			<p>AirBreak Speed: <font color="#e699ff"><label id="airBreakSpeed">100</label></font></p>
			<p>Anti-Aim: <font id="antiAimStateColor" color="red"><label id="antiAimState">FALSE</label></font></p>
			<p>Auto Mining: <font id="autoMiningStateColor" color="red"><label id="autoMiningState">FALSE</label></font></p>
		</div>

		<div id="infoWindow">
			<p>Private Hack</p>
			<p>Пацаны, это секс</p>
			<p><a href="https://vk.com/id541273525" target="_blank" rel="noopener noreferrer">King Creator</a></p>
		</div>

	</div>
	
	<script>
		document.addEventListener('keyup', function (evt)
		{
			if (evt.keyCode === 45)
			{
				if (document.getElementById("WAKHack_window").style.display == "none")
				{
					document.getElementById("WAKHack_window").style.display = "";
				}
				else
				{
					document.getElementById("WAKHack_window").style.display = "none";
				}
			}
		});
	</script>
	
</div>
`;
