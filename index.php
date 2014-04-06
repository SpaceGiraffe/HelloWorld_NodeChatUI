<html>
	<head>
		<title>Hello, World</title>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

		<?php

			$assetsDir = 'assets/js';
			$scripts = array(
				'app',
				'canvas',
				'instance',
				'environment',
				'resource',
				'user',
				'sprite',
				'runner',
				'disaster',
				'disasters',
				'pinetree',
				'birchtree'
			);

			foreach($scripts as $script) {
				//echo "$assetsDir/hw_$script.js";
				echo "<script src=\"$assetsDir/hw_$script.js\"></script>";
			}

		?>

		<style type="text/css" media="screen">
			body {
				padding: 0;
				margin: 0;
				width: 100%;
				height: 100%;
				position: relative;
			}
			canvas {
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -512px !important;
				margin-top: -384px !important;
				margin: 20px;
				background: lightgray;
			}
		</style>
	</head>
	<body>

	</body>
</html>
