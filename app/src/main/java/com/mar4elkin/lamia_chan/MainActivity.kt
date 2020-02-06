package com.mar4elkin.lamia_chan

import android.os.AsyncTask
import android.os.Bundle
import android.view.View
import android.widget.ListView
import android.widget.ProgressBar
import androidx.appcompat.app.AppCompatActivity
import org.json.JSONObject
import java.net.URL
import android.util.Log

class MainActivity : AppCompatActivity() {

    var dataList = ArrayList<HashMap<String, String>>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        fetchJsonData().execute()
    }


    inner class fetchJsonData() : AsyncTask<String, Void, String>() {
        override fun onPreExecute() {
            super.onPreExecute()
            findViewById<ProgressBar>(R.id.loader).visibility = View.VISIBLE
        }

        override fun doInBackground(vararg params: String?): String? {
            return URL("http://192.168.1.167:8000/api/v1/jmanga/?format=json").readText(
                Charsets.UTF_8
            )
        }
        override fun onPostExecute(result: String?) {
            super.onPostExecute(result)
            Log.d("Fetched Data", result)

            findViewById<ProgressBar>(R.id.loader).visibility = View.GONE

            val jsonObj = JSONObject(result)
            val usersArr = jsonObj.getJSONArray("content")
            for (i in 0 until usersArr.length()) {
                val singleUser = usersArr.getJSONObject(i)

                val map = HashMap<String, String>()
                map["title"] = singleUser.getString("title")
                map["description"] = singleUser.getString("description")
                map["preview_image_url"] = singleUser.getString("preview_image_url")
                dataList.add(map)
            }

            findViewById<ListView>(R.id.listView).adapter = CustomAdapter(this@MainActivity, dataList)
        }
    }
}