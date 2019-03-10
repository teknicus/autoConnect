import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new MyAppState();
  }
}

class MyAppState extends State<MyApp> {
  List _cl = ["Select","Marthahalli", "Whitefield", "Silk Board", "Electronic City"];
  List _rad = ["Select","1km", "2km", "5km" ];
  List _ti = ["Select","00:00-02:00","02:00-04:00","04:00-06:00","06:00-08:00","08:00-10:00","10:00-12:00","12:00-14:00",
  "14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00","22:00-00:00" ];

  List<DropdownMenuItem<String>> _dropDownMenuItems;
  String _selectedcl;
  List<DropdownMenuItem<String>> _dropDownMenu1Items;
  String _selectedrad;
  List<DropdownMenuItem<String>> _dropDownMenu2Items;
  String _selectedti;

  @override
  void initState() {
    _dropDownMenuItems = buildAndGetDropDownMenuItems(_cl);
    _selectedcl = _dropDownMenuItems[0].value;
    _dropDownMenu1Items = buildAndGetDropDownMenuItems(_rad);
    _selectedrad = _dropDownMenu1Items[0].value;
    _dropDownMenu2Items = buildAndGetDropDownMenuItems(_ti);
    _selectedti = _dropDownMenu2Items[0].value;

    super.initState();
  }

  List<DropdownMenuItem<String>> buildAndGetDropDownMenuItems(List fruits) {
    List<DropdownMenuItem<String>> items = new List();
    for (String fruit in fruits) {
      items.add(new DropdownMenuItem(value: fruit, child: new Text(fruit)));
    }
    return items;
  }

  void changedDropDownItem(String selectedcl) {
    setState(() {
      _selectedcl = selectedcl;
    });
  }
  void changedDropDown1Item(String selectedrad) {
    setState(() {
      _selectedrad = selectedrad;
    });
  }
  void changedDropDown2Item(String selectedti) {
    setState(() {
      _selectedti = selectedti;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      home: new Scaffold(
        appBar: new AppBar(
          title:  new Text(
            'autoConnect',

            style: new TextStyle(fontSize: 25.0 ),
          ),
        ),
        body: new Container(
          child: new Center(
              child: new Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  new Text(
                    'Current Location',
                    textAlign: TextAlign.center,
                    style: new TextStyle(fontSize: 25.0 ),
                  ),
                  new DropdownButton(
                    value: _selectedcl,
                    items: _dropDownMenuItems,
                    onChanged: changedDropDownItem,
                  ),
                  new Text(
                    'Radius',
                    textAlign: TextAlign.center,
                    style: new TextStyle(fontSize: 25.0 ),
                  ),
                  new DropdownButton(
                    value: _selectedrad,
                    items: _dropDownMenu1Items,
                    onChanged: changedDropDown1Item,
                  ),
                  new Text(
                    'Time Interval',
                    textAlign: TextAlign.center,
                    style: new TextStyle(fontSize: 25.0 ),
                  ),

                  new DropdownButton(
                    value: _selectedti,
                    items: _dropDownMenu2Items,
                    onChanged: changedDropDown2Item,
                  ),
                  new RaisedButton(
                    onPressed: () {
                      // Navigate back to first route when tapped.
                    },
                    //child: Text('Submit',style: TextStyle(fontWeight:30,fontWeight.bold),),
                    child: Text(
                      "Submit",
                      style: TextStyle(
                        color: Colors.red,
                        fontSize: 20.0,
                      ),
                    ),
                  ),


                ],

              )

          ),
        ),
      ),
    );
  }
}

