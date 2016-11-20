//html構造が全て読み込まれた後にjavascriptが読み込まれるようにする
window.onload = function(){
	setInterval(drawClock, 1000);//時間ごとの繰り返し処理　1000ミリ秒＝
}

function drawClock() {
	var canvas = document.getElementById('analogClock');//canvasという名前の変数を宣言
	var ctx = canvas.getContext('2d');

	//Go to center
	ctx.clearRect(0, 0, 300, 300);//幅　高さ　300.300消す
	ctx.save();//保存
	ctx.translate(150, 150);//x 150 y150にする

	//円を描く 白い円
	ctx.beginPath();//これからコードを書きます。宣言
	ctx.fillStyle = "rgb(255, 255, 255)";//塗りつぶしの色
	ctx.lineWidth = 8;//線の太さ
	ctx.arc(0,0,145,0,Math.PI*2,true);//x座標　y座標　半径　開始位置　（終了位置）角度　true反時計周り
	ctx.fill();//　塗りつぶす

	//黒い円
	ctx.beginPath();
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.arc(0,0,10,0,Math.PI*2,true);
	ctx.fill();

	//赤い円
	ctx.beginPath();
	ctx.strokeStyle = "rgb(200, 0, 0)";//線、図形周りの枠線指定 外側の線
	ctx.arc(0,0,145,0,Math.PI*2,true);
	ctx.stroke();//書く

	//i=12と条件　i<=12条件の間だけ繰り返す　i++１ずつ増える
	for(var i = 1; i <=12; i++) {
		ctx.save();
		ctx.font = "26px 'Arial'";//文字サイズ　フォント
        ctx.rotate((360 / 12 * i)* Math.PI/180);//iに1~12を入れる　(360÷12×i)×180/180 Math.PI=π=180度
        ctx.translate(0, -125);//y軸125移動
        ctx.rotate(-((360 / 12 * i) * Math.PI / 180));//数字の角度が軸に向いているので変更
        ctx.textAlign = "center";
        ctx.fillStyle = "rgb(160, 160, 160)";
        ctx.fillText(i, 0, 10);//テキストを書く
        ctx.restore();//復元　saveに戻る
	}

	// get Times
	var now = new Date();//今日の日付データを変数nowに格納
	var hh = now.getHours();//時間を取得
	var mm = now.getMinutes();//分を取得
	var ss = now.getSeconds();//秒を取得

	//針　時間　短針
	ctx.save();
	ctx.beginPath();
	ctx.rotate( hh*(Math.PI/6) + (Math.PI/360)*mm + (Math.PI/21600)*ss );//短針の回転　π＝180度なので半分の６　分:60分×6 秒:60×60秒×6
	ctx.moveTo(0, 0);//線の初期位置
	ctx.lineTo(0, -100);//線の終わり
	ctx.shadowColor = "gray";//影の色
	ctx.shadowOffsetX = 2;//影のオフセット　距離
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;//ぼかし
	ctx.lineWidth = 8;//線の太さ
	ctx.lineCap = "round";//先の形状
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.stroke();
	ctx.restore();

	//長針
	ctx.save();
	ctx.beginPath();
	ctx.rotate( (Math.PI/30)*mm + (Math.PI/1800)*ss );//5×6=30 30×6=180
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -105);
	ctx.shadowColor = "gray";
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	ctx.shadowBlur = 2;
	ctx.lineWidth = 5;
	ctx.lineCap = "round";
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.stroke();
	ctx.restore();

	//秒針
	ctx.save();
	ctx.beginPath();
	ctx.rotate(ss * Math.PI/30);
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -105);
	ctx.shadowColor = "gray";
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	ctx.shadowBlur = 2;
	ctx.lineWidth = 2;
	ctx.lineCap = "round";
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.stroke();
	ctx.restore();
	
	//黒い円もう一回作る
	ctx.beginPath();
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.arc(0,0,10,0,Math.PI*2,true);
	ctx.fill();
	ctx.restore();
}



	