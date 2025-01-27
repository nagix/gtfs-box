# GTFS box

A GTFS/GTFS Realtime viewer that allows you to see the real-time operation of public transportation systems around the world on a 3D map. It is a web application using the [Mini Tokyo 3D](https://minitokyo3d.com) as a library, and is characterized by smooth operation and realistic scenery.

世界中の公共交通機関のリアルタイムの運行の様子を3Dマップ上で見ることができる、GTFS/GTFS Realtimeビューアです。[Mini Tokyo 3D](https://minitokyo3d.com)をライブラリとして使用したWebアプリケーションであり、滑らかな動作とリアルな風景が特徴です。

![Screenshot](https://nagix.github.io/gtfs-box/screenshot1.jpg)

See a [Live Demo](https://nagix.github.io/gtfs-box).

[ライブデモ](https://nagix.github.io/gtfs-box)をご覧ください。

## Demo Video / デモ映像

- [Demo Video (English)](https://youtu.be/VEeys6Nt4Ec)
- [Demo Video (Japanese)](https://youtu.be/raGNOVIehGo)

## How to Use / 使い方

GTFS box allows you to view one operator's routes and operating vehicles at a time. First, click/tap the “v” button (13) in the upper right corner of the screen to display the settings panel. Select pre-registered data from the preset operator menu (1) or enter the URL of the GTFS zip file (2), URL of the GTFS Realtime VehiclePosition (3), operator's color (4), zoom level (5), latitude (6), longitude (7), bearing (8), and pitch (9) individually, then click/tap the load button (11) to display the data on the map.

Hover the mouse over a GTFS vehicle on the map to view detailed information such as the vehicle's system number and destination. Clicking on a GTFS vehicle will also start tracking the vehicle and display a list of stops and departure times. Clicking on any point on the map other than vehicles will end the tracking. The control buttons on the right side of the screen are the same as those in Mini Tokyo 3D, so please refer to the [Mini Tokyo 3D User Guide](https://minitokyo3d.com/docs/master/user-guide/screen-and-operations.html) for details.

GTFS boxでは、1度に1つの事業者の路線と運行車両を見ることができます。まず、画面右上の「v」ボタン(13)をクリック／タップして、設定パネルを表示します。プリセット事業者メニュー(1)から事前登録されているデータを選ぶか、GTFS zipファイルのURL(2)、GTFS Realtime VehiclePositionのURL(3)、事業者のカラー(4)、ズームレベル(5)、緯度(6)、経度(7)、方角(8)、傾き(9)を個別に入力して、ロードボタン(11)をクリック／タップすると、マップ上にデータが表示されます。

マップ上でGTFS車両にマウスを当てると、系統番号や行き先などの詳細情報を見ることができます。また、GTFS車両をクリックすると車両の追跡が開始され、停留所と発車時刻のリストが表示されます。車両以外のマップ上の地点をクリックすると、追跡は終了します。画面右側のコントロールボタンはMini Tokyo 3Dと共通ですので、機能の詳細は[Mini Tokyo 3Dユーザーガイド](https://minitokyo3d.com/docs/master/ja/user-guide/screen-and-operations.html)をご覧ください。

![Screenshot](https://nagix.github.io/gtfs-box/screenshot2.jpg)

No | Description | 説明
-: | -- | --
1 | The preset operator menu | プリセット事業者メニュー
2 | The URL of the GTFS zip file | GTFS zipファイルのURL
3 | The URL of the GTFS Realtime VehiclePosition | GTFS Realtime VehiclePositionのURL
4 | The operator's color | 事業者のカラー
5 | The zoom level of the map | マップのズームレベル
6 | The latitude of the centerpoint of the map | マップの緯度
7 | The longitude of the centerpoint of the map | マップの経度
8 | The bearing of the map, measured in degrees counter-clockwise from north | マップの方角。真北から反時計回りの角度で指定する
9 | The pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-85) | マップの傾き。画面に対する地表面の角度（0〜85）で指定する
10 | Set the camera position and angle values based on the currect map settings | 現在のマップをもとにカメラ位置・向きの値をセット
11 | Load data according to the settings | 設定したデータをロード
12 | Jump to the GitHub repository | GitHubレポジトリへジャンプ
13 | Toggle the settings panel | 設定パネルの表示・非表示
14 | Date and time | 時刻表示
15 | Change the zoom level and bearing | ズームレベル・方角の変更
16 | Toggle the fullscreen mode | フルスクリーンモード切り替え
17 | Configure the layers and tracking mode, and show app's information | レイヤー・追跡モードの設定・アプリ情報表示
18 | A GTFS vehicle. Click/tap to track | GTFS車両。クリック／タップで追跡可能
19 | Hover the mouse over a GTFS vehicle to display details | GTFS車両にマウスを当てると詳細表示
20 | The list of stops and departure times of the vehicle | GTFS車両の停留所と発車時刻のリスト

## About Data / データについて

The source of the public transportation data in this app is the [Public Transportation Open Data Center](https://www.odpt.org). They are based on the data provided by the public transportation operators. The accuracy and integrity of the data are not guaranteed. Please do not contact the public transportation operators directly regarding the content of the app.

- Bureau of Transportation, Tokyo Metropolitan Government / Association for Open Data of Public Transportation, Bus information of Bureau of Transportation, Tokyo Metropolitan Government, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)
- Keisei Transit Bus Co.,Ltd., KEISEI TRANSIT BUS, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)
- Aomori City, Aomori City Bus information, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)
- Nagai Transportation Co., Ltd., Nagai Bus, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)
- Keifuku Bus Co., Ltd., Keifuku Bus, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)
- UNOBUS, UNOBUS GTFS, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)
- Funaki Tetsudou Corporation, Funatetsu Bus, [Creative Commons License Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en)

本アプリケーションが利用する公共交通データは、[公共交通オープンデータセンター](https://www.odpt.org\" )において提供されるものです。公共交通事業者により提供されたデータを元にしていますが、必ずしも正確・完全なものとは限りません。本アプリケーションの表示内容について、公共交通事業者への直接の問合せは行わないでください。

- 東京都交通局・公共交通オープンデータ協議会、東京都交通局 バス関連情報、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- 京成トランジットバス株式会社、京成トランジットバス、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- 青森市企業局交通部、青森市営バス路線情報、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- 永井運輸株式会社、永井バス（永井運輸株式会社）、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- 京福バス株式会社、京福バス（路線バス）、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- 宇野自動車株式会社、宇野自動車（路線バス）、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- 船木鉄道株式会社、船鉄バス、[クリエイティブ・コモンズ・ライセンス表示 4.0 国際 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.ja)

## License / ライセンス

GTFS box is available under the [MIT license](https://opensource.org/licenses/MIT).
